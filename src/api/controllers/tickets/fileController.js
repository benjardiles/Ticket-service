require("dotenv").config();
const fs = require("fs");
const driveService = require("../../../services/tickets/driveService");

// Controlador para subir archivos
const uploadFile = async (req, res) => {
  const image = req.file;

  try {
    console.log("Archivo recibido:", image);

    // Renombrar el archivo temporal al nombre original
    const filePath = `${image.destination}/${image.originalname}`;
    console.log({ filePath });
    
    await fs.promises.rename(
      `${image.destination}/${image.filename}`,
      filePath
    );

    const metaData = {
      name: image.originalname.substring(0, image.originalname.lastIndexOf(".")),
      parents: [process.env.DRIVE_FOLDER_ID], // ID de la carpeta en Google Drive
    };

    const media = {
      mimeType: image.mimetype, // Corregido: mimeType en minúsculas
      body: fs.createReadStream(filePath), // Leer el archivo subido
    };

    // Subir el archivo a Google Drive
    const response = await driveService.files.create({
      resource: metaData,
      media: media,
      fields: "id",
    });

    console.log("Archivo subido con ID:", response.data.id);

    // Eliminar el archivo temporal después de subirlo
    fs.unlinkSync(filePath);

    res.status(200).send({
      success: true,
      fileId: response.data.id,
      message: "Archivo subido exitosamente",
    });
  } catch (err) {
    console.error("Error al subir el archivo:", err);
    res.status(500).send({
      success: false,
      message: "Error al subir el archivo",
      error: err.message,
    });
  }
};

// Controlador para obtener todos los archivos
const getAllFiles = async (req, res) => {
  try {
    const query = `'${process.env.FOLDER_ID}' in parents`;
    const response = await driveService.files.list({
      q: query, // Filtrar por la carpeta especificada
      fields: "files(id, name)",
    });
    res.status(200).send(response.data);
  } catch (err) {
    console.error("Error al obtener los archivos:", err);
    res.status(500).send({
      success: false,
      message: "Error al obtener los archivos",
      error: err.message,
    });
  }
};

// Controlador para eliminar un archivo
const deleteFile = async (req, res) => {
  const fileId = req.body.fileId;

  try {
    const response = await driveService.files.delete({
      fileId: fileId,
    });
    res.status(200).send({
      success: true,
      message: "Archivo eliminado exitosamente",
      response: response.data,
    });
  } catch (err) {
    console.error("Error al eliminar el archivo:", err);
    res.status(500).send({
      success: false,
      message: "Error al eliminar el archivo",
      error: err.message,
    });
  }
};

// Controlador para actualizar un archivo
const updateFile = async (req, res) => {
  try {
    const image = req.file;
    const fileId = req.body.fileId;

    // Renombrar el archivo temporal al nombre original
    const filePath = `${image.destination}/${image.originalname}`;
    await fs.promises.rename(
      `${image.destination}/${image.filename}`,
      filePath
    );

    const media = {
      mimeType: image.mimetype,
      body: fs.createReadStream(filePath),
    };

    const response = await driveService.files.update({
      resource: { name: image.originalname },
      fileId: fileId,
      media: media,
      fields: "id",
    });

    // Eliminar el archivo temporal después de actualizarlo
    fs.unlinkSync(filePath);

    res.status(200).send({
      success: true,
      fileId: response.data.id,
      message: "Archivo actualizado exitosamente",
    });
  } catch (err) {
    console.error("Error al actualizar el archivo:", err);
    res.status(500).send({
      success: false,
      message: "Error al actualizar el archivo",
      error: err.message,
    });
  }
};

module.exports = {
  uploadFile,
  deleteFile,
  updateFile,
  getAllFiles,
};