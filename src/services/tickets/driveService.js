const { google } = require('googleapis');
const { PassThrough } = require('stream');

const keyPath = "/Users/benja/Desktop/archivossoporte-1eabfdd4afb2.json"; // Ruta del JSON de credenciales
const SCOPES = ['https://www.googleapis.com/auth/drive'];
const folderId = "1v1zNUcw3wOjnbYo51tYintrYig46EGq6";

let drive = null;

// 🔹 Autenticación con Google Drive
async function authenticate() {
  if (!drive) {
    const auth = new google.auth.GoogleAuth({
      keyFile: keyPath,
      scopes: SCOPES
    });
    const authClient = await auth.getClient();
    drive = google.drive({ version: 'v3', auth: authClient });
    console.log('🔐 Autenticado en Google Drive');
  }
}

// 🔹 Subir archivo
async function uploadFile(fileName, fileBuffer) {
  await authenticate();

  const fileMetadata = { name: fileName, parents: [folderId] };
  console.log('📤 Subiendo archivo:', fileName);

  const bufferStream = new PassThrough();
  bufferStream.end(fileBuffer);

  const media = { mimeType: 'application/octet-stream', body: bufferStream };

  const file = await drive.files.create({
    requestBody: fileMetadata,
    media: media,
    fields: 'id'
  });

  console.log('✅ Archivo subido con ID:', file.data.id);
  return file.data.id;
}

// 🔹 Obtener detalles de un archivo
async function getFile(fileId) {
  await authenticate();

  try {
    const file = await drive.files.get({
      fileId: fileId,
      fields: 'name, mimeType'
    });
    console.log('📄 Archivo obtenido:', file.data);
    return file.data;
  } catch (error) {
    console.error('❌ Error obteniendo el archivo:', error);
    return null;
  }
}

// 🔹 Eliminar un archivo
async function deleteFile(fileId) {
  await authenticate();

  try {
    await drive.files.delete({ fileId: fileId });
    console.log('🗑️ Archivo eliminado');
  } catch (error) {
    console.error('❌ Error eliminando el archivo:', error);
    throw error;
  }
}

// 🔹 Exportar funciones
module.exports = {
  uploadFile,
  getFile,
  deleteFile
};