const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const routes = require('./routes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3001', credentials: true }));

app.use('/', routes);

app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));