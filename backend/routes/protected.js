const express = require('express');
const authenticateToken = require('../middlewares/authenticate');
const authorizeRole = require('../middlewares/roleMiddleware');
const router = express.Router();

// Rutas protegidas por autenticación y rol
router.get('/admin/dashboard', authenticateToken, authorizeRole('admin'), (req, res) => {
    res.json({ message: 'Bienvenido al panel de administración' });
});

router.get('/doctor/dashboard', authenticateToken, authorizeRole('doctor'), (req, res) => {
    res.json({ message: 'Bienvenido al panel de doctor' });
});

router.get('/employee/dashboard', authenticateToken, authorizeRole('employee'), (req, res) => {
    res.json({ message: 'Bienvenido al panel de empleado' });
});

module.exports = router;
