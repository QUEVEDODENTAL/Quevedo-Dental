// middleware/roleMiddleware.js
const authorizeRole = (role) => {
    return (req, res, next) => {
        if (req.user && req.user.role === role) {
            return next(); // El usuario tiene el rol adecuado
        }

        return res.status(403).json({ error: 'Acceso no autorizado' }); // El rol no coincide
    };
};

module.exports = authorizeRole;
