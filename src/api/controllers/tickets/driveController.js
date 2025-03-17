const express = require('express');
const multer = require('multer');
const { uploadFile, getFile, deleteFile } = require('../tickets/driveService');

const router = express.Router();
const upload = multer(); // Configuración básica de Multer

// 🔹 Ruta para subir un archivo
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No se ha subido ningún archivo' });

    const fileId = await uploadFile(req.file.originalname, req.file.buffer);
    res.json({ message: 'Archivo subido con éxito', fileId });
  } catch (error) {
    res.status(500).json({ error: 'Error subiendo el archivo', details: error.message });
  }
});

// 🔹 Ruta para obtener un archivo
router.get('/file/:id', async (req, res) => {
  try {
    const file = await getFile(req.params.id);
    if (!file) return res.status(404).json({ error: 'Archivo no encontrado' });

    res.json(file);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo el archivo' });
  }
});

// 🔹 Ruta para eliminar un archivo
router.delete('/file/:id', async (req, res) => {
  try {
    await deleteFile(req.params.id);
    res.json({ message: 'Archivo eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error eliminando el archivo' });
  }
});

module.exports = router;