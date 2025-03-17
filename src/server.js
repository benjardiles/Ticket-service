const express = require('express');
const driveRoutes = require('./src/controllers/driveController');

const app = express();
app.use(express.json());

app.use('/drive', driveRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));