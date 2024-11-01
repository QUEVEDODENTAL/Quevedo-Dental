// Importación de dependencias necesarias para el servidor
const express = require('express'); // Framework de servidor
const prisma = require('@prisma/client'); // Cliente de Prisma para interactuar con la base de datos
const bcrypt = require('bcryptjs'); // Biblioteca para hashear contraseñas
const jwt = require('jsonwebtoken'); // Biblioteca para manejar JSON Web Tokens
const cookieParser = require('cookie-parser'); // Middleware para manejar cookies
const cors = require('cors'); // Middleware para permitir solicitudes desde distintos dominios
require('dotenv').config(); // Cargar variables de entorno

// Inicialización de la aplicación de Express
const app = express();
const port = process.env.PORT || 3000;

// Middlewares para parsear JSON y manejar cookies
app.use(express.json());
app.use(cookieParser());

// Configuración de CORS para permitir el uso de cookies entre frontend y backend
app.use(cors({
    origin: 'http://localhost:3001', // Cambia esto a la URL de tu frontend
    credentials: true, // Permitir el uso de cookies
}));

// Inicialización del cliente Prisma para interactuar con la base de datos
const prismaClient = new prisma.PrismaClient();

// Ruta para el registro de usuario
app.post('/register', async (req, res) => {
    // Desestructuración de los datos enviados en el cuerpo de la solicitud
    const { email, password, isAdministrator, isDoctor, isEmployee } = req.body;

    console.log('Datos de registro:', req.body); // Log para verificar datos recibidos

    try {
        // Hashear la contraseña antes de guardarla en la base de datos
        const hashedPassword = await bcrypt.hash(password, 10);

        // Creación del nuevo usuario en la base de datos
        const user = await prismaClient.usuarios.create({
            data: {
                Email: email,
                Password: hashedPassword,
                IsAdministrator: isAdministrator || false,
                IsDoctor: isDoctor || false,
                IsEmployee: isEmployee || false,
            },
        });

        // Respuesta exitosa con los datos del usuario creado
        res.status(201).json({ message: 'Usuario creado exitosamente!', user });
    } catch (error) {
        console.error('Error en el registro:', error); // Log del error en registro
        res.status(500).json({ message: 'Error creando usuario', error });
    }
});

// Ruta de inicio de sesión
app.post('/login', async (req, res) => {
    const { email, password } = req.body; // Desestructuración de los datos recibidos

    // Busca el usuario en la base de datos según el email proporcionado
    const user = await prismaClient.usuarios.findUnique({ where: { Email: email } });

    // Verificación de las credenciales (email y contraseña)
    if (user && (await bcrypt.compare(password, user.Password))) {
        // Creación del token con la clave secreta y una validez de 1 hora
        const token = jwt.sign(
            { email: user.Email, role: user.IsAdministrator ? 'admin' : 'user' },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Configuración de la cookie con el token
        res.cookie('token', token, {
            httpOnly: true, // La cookie no es accesible desde JavaScript del lado del cliente
            secure: process.env.NODE_ENV === 'production', // Solo envía por HTTPS en producción
            maxAge: 3600000, // Duración de 1 hora en milisegundos
        });

        return res.status(200).json({ message: 'Sesion iniciada' });
    }

    return res.status(401).json({ message: 'Credenciales invalidas' });
});

// Middleware para autenticar el token del usuario
const authenticateToken = (req, res, next) => {
    const token = req.cookies.token; // Obtención del token desde la cookie

    // Si no hay token, responder con estado 401 (no autorizado)
    if (!token) return res.sendStatus(401);

    // Verificación del token usando la clave secreta
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Token inválido o expirado (403: prohibido)
        req.user = user; // Almacena la información del usuario en la solicitud
        next(); // Pasa al siguiente middleware o ruta
    });
};

// Ruta protegida que requiere autenticación
app.get('/protected-route', authenticateToken, (req, res) => {
    res.json({ message: 'Esta es una ruta protegida', user: req.user }); // Envío de la información del usuario autenticado
});

// Inicia el servidor en el puerto especificado
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
