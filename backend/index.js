// Importación de dependencias necesarias para el servidor
const express = require('express'); // Framework de servidor
const prisma = require('@prisma/client'); // Cliente de Prisma para interactuar con la base de datos
const bcrypt = require('bcryptjs'); // Biblioteca para hashear contraseñas
const jwt = require('jsonwebtoken'); // Biblioteca para manejar JSON Web Tokens
const cookieParser = require('cookie-parser'); // Middleware para manejar cookies
const cors = require('cors'); // Middleware para permitir solicitudes desde distintos dominios
const { doctor, empleado } = require('./prisma/client');
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

// Obtener todos los clientes (con información básica)
app.get('/clientes', async (req, res) => {
    try {
        const clientes = await prismaClient.clientes.findMany({
            select: {
                id: true,
                Name: true,
                LastName: true,
                SEX: true,
                Phone: true,
                Email: true,
            },
        });
        res.status(200).json(clientes);
    } catch (error) {
        console.error('Error al obtener clientes:', error);
        res.status(500).json({ error: 'Error al obtener la lista de clientes' });
    }
});

// Obtener detalles de un cliente por ID
app.get('/clientes/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const cliente = await prismaClient.clientes.findUnique({
            where: { id: parseInt(id) },
            select: {
                id: true,
                Name: true,
                LastName: true,
                SEX: true,
                Age: true,
                BirthDate: true,
                Address: true,
                Phone: true,
                CURP: true,
                Email: true,
                BloodType: true,
                Occupation: true,
                Education: true,
            },
        });

        if (!cliente) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }

        res.status(200).json(cliente);
    } catch (error) {
        console.error('Error al obtener detalles del cliente:', error);
        res.status(500).json({ error: 'Error al obtener los detalles del cliente' });
    }
});



// Registro de doctor con manejo de contraseña y transacción
app.post('/register/doctor', async (req, res) => {
    const {
        name, lastName, age, birthDate, gender, specialty, address,
        cellphone, curp, licenseNumber, sex, medicalLicense, email,
        hireDate, password
    } = req.body;

    // Validación de campos obligatorios
    if (!email || !name || !lastName || !password) {
        return res.status(400).json({ error: 'Campos obligatorios faltantes' });
    }

    try {
        // Verificar si el email ya existe en la base de datos
        const existingDoctor = await prismaClient.doctor.findUnique({
            where: { Email: email },
        });

        if (existingDoctor) {
            return res.status(400).json({ error: "El correo electrónico ya está en uso." });
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Datos para el registro del doctor
        const doctorData = {
            Name: name,
            LastName: lastName,
            Age: age ? parseInt(age) : null,
            BirthDate: birthDate ? new Date(birthDate) : null,
            Gender: gender || null,
            Specialty: specialty,
            Address: address,
            Cellphone: cellphone,
            CURP: curp,
            LicenseNumber: licenseNumber,
            Sex: sex,
            MedicalLicense: medicalLicense,
            Email: email,
            HireDate: hireDate ? new Date(hireDate) : new Date(),
            Password: hashedPassword
        };

        // Datos para el usuario
        const usuarioData = {
            Email: doctorData.Email,
            Password: doctorData.Password,
            IsDoctor: true,
        };

        // Iniciar la transacción
        const result = await prismaClient.$transaction(async (prisma) => {
            // Crear el doctor
            const doctor = await prisma.doctor.create({ data: doctorData });

            // Crear el usuario para el doctor
            const usuario = await prisma.usuarios.create({
                data: usuarioData,
            });

            // Retornar ambos objetos si todo fue bien
            return { doctor, usuario };
        });

        res.status(201).json({ message: 'Doctor y usuario registrados exitosamente', result });
    } catch (error) {
        console.error('Error al registrar doctor y usuario:', error);
        res.status(500).json({ error: 'Error al registrar el doctor y el usuario' });
    }
});

// Registro de empleado con manejo de contraseña y transacción
app.post('/register/employee', async (req, res) => {
    const {
        name, lastName, birthDate, gender, cellphone, email,
        address, position, curp, rfc, salary, hireDate, password
    } = req.body;

    // Validación de campos obligatorios
    if (!email || !name || !lastName || !password) {
        return res.status(400).json({ error: 'Campos obligatorios faltantes' });
    }

    try {
        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Datos para el registro del empleado
        const employeeData = {
            Name: name,
            LastName: lastName,
            BirthDate: birthDate ? new Date(birthDate) : null,
            Gender: gender,
            Cellphone: cellphone,
            Email: email,
            Address: address,
            Position: position,
            CURP: curp,
            RFC: rfc,
            Salary: salary ? parseFloat(salary) : null,
            HireDate: hireDate ? new Date(hireDate) : new Date(),
            Password: hashedPassword
        };

        // Datos para el usuario
        const usuarioData = {
            Email: employeeData.Email,
            Password: employeeData.Password,
            IsEmployee: true,
        };

        // Iniciar la transacción
        const result = await prismaClient.$transaction(async (prisma) => {
            // Crear el empleado
            const employee = await prisma.empleado.create({ data: employeeData });

            // Crear el usuario para el empleado
            const usuario = await prisma.usuarios.create({
                data: usuarioData,
            });

            // Retornar ambos objetos si todo fue bien
            return { employee, usuario };
        });

        res.status(201).json({ message: 'Empleado y usuario registrados exitosamente', result });
    } catch (error) {
        console.error('Error al registrar empleado y usuario:', error);
        res.status(500).json({ error: 'Error al registrar el empleado y el usuario' });
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
