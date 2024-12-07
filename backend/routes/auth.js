const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prismaClient = require('../utils/prismaClient');

const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email y contraseña son requeridos' });
    }

    try {
        const user = await prismaClient.usuarios.findUnique({ where: { Email: email } });

        if (!user || !(await bcrypt.compare(password, user.Password))) {
            return res.status(401).json({ error: 'Credenciales incorrectas' });
        }

        const token = jwt.sign(
            { id: user.Id, role: user.IsDoctor ? 'doctor' : user.IsAdministrator ? 'admin' : 'employee' },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 3600000, // 1 hora
        });

        res.json({ message: 'Inicio de sesión exitoso', role: user.IsDoctor ? 'doctor' : user.IsAdministrator ? 'admin' : 'employee' });

    } catch (error) {
        console.error('Error en inicio de sesión:', error);
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
});

// Ruta para validar el token
router.get('/validate-token', async (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await prismaClient.usuarios.findUnique({ where: { Id: decoded.id } });

        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        const role = user.IsDoctor ? 'doctor' : user.IsAdministrator ? 'admin' : 'employee';
        res.json({ role });
    } catch (error) {
        console.error('Error validating token:', error);
        res.status(401).json({ error: 'Invalid token' });
    }
});

router.post('/logout', (req, res) => {
    res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
    });

    res.json({ message: 'Sesión cerrada correctamente' });
});



module.exports = router;
