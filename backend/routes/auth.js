const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prismaClient = require('../utils/prismaClient');

const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Busca el usuario en la base de datos según el email proporcionado
        const user = await prismaClient.usuarios.findUnique({ where: { Email: email } });
        // Verificación de las credenciales (email y contraseña)
        if (!user || !(await bcrypt.compare(password, user.Password))) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }
        // Creación del token con la clave secreta y una validez de 1 hora
        const token = jwt.sign({ id: user.Id, role: user.IsDoctor ? 'doctor' : 'empleado' }, process.env.JWT_SECRET, { expiresIn: '1h' });
        // Configuración de la cookie con el token
        res.cookie('token', token, { httpOnly: true, secure: false, maxAge: 3600000 });
        res.json({ message: 'Inicio de sesión exitoso' });
    } catch (error) {
        console.error('Error en inicio de sesión:', error);
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
});

module.exports = router;
