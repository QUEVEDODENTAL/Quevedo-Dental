const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const routes = require('./routes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Lista de orígenes permitidos (local y producción)
const allowedOrigins = [
  'http://localhost:3001', // Para desarrollo local
  'http://localhost:3000', // Otra opción local
  'https://quevedodental.netlify.app', // Para producción en Netlify
];

// Configuración dinámica de CORS
app.use(cors({
  origin: (origin, callback) => {
    // Si el origen está en la lista permitida o no está definido (ejemplo: herramientas como Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed'));
    }
  },
  credentials: true, // Permitir envío de cookies o encabezados con credenciales
}));

// Middleware global
app.use(express.json());
app.use(cookieParser());

// Rutas
app.use('/', routes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
