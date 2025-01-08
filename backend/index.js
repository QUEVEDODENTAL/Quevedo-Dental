const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const routes = require('./routes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Configuración de middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: 'https://quevedodental.netlify.app', // URL del frontend desplegado en Netlify
    credentials: true, // Habilita el intercambio de cookies
  })
);

// Rutas
app.use('/', routes);

// Inicialización del servidor
app.listen(port, () =>
  console.log(`Servidor corriendo en http://localhost:${port}`)
);
