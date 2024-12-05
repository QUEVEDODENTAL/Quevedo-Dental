const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).send('No autorizado');

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).send('Token inválido');
        console.log('JWT Payload:', user);  // Verifica cómo es el payload
        req.user = user;
        next();
    });
};
