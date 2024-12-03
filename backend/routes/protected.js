const express = require('express');
const authenticateToken = require('../middlewares/authenticate');

const router = express.Router();

router.get('/', authenticateToken, (req, res) => {
    res.json({ message: 'Ruta protegida', user: req.user });
});

module.exports = router;
