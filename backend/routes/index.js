const express = require('express');
const clientesRoutes = require('./clientes');
const doctoresRoutes = require('./doctores');
const employeeRoutes = require('./empleados')
const authRoutes = require('./auth');
const protectedRoutes = require('./protected');
const profileRoutes = require('./perfil');


const router = express.Router();

router.use('/clientes', clientesRoutes);
router.use('/doctores', doctoresRoutes);
router.use('/employee', employeeRoutes);
router.use('/auth', authRoutes);
router.use('/protected', protectedRoutes);
router.use('/perfil', profileRoutes);

module.exports = router;
