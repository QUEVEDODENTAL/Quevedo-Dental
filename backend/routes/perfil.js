const express = require('express');
const jwt = require('jsonwebtoken');
const authenticateToken = require('../middlewares/authenticate');
const authorizeRole = require('../middlewares/roleMiddleware');
const prismaClient = require('../utils/prismaClient');

const router = express.Router();


router.get('/profile', authenticateToken, async (req, res) => {
    console.log('Ruta /perfil/profile alcanzada');
    try {
        const { id, role } = req.user;


        if (!id) {
            return res.status(400).json({ message: 'ID de usuario no encontrado' });
        }


        console.log('User:', req.user);


        const user = await prismaClient.usuarios.findUnique({
            where: { Id: id },
            select: {
                Id: true,
                Email: true,
                IsAdministrator: true,
                IsDoctor: true,
                IsEmployee: true,
            },
        });

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        let userData;

        if (user.IsDoctor) {
            userData = await prismaClient.doctor.findUnique({
                where: { usuarioId: id },
                select: {
                    Name: true,
                    LastName: true,
                    Specialty: true,
                    Cellphone: true,
                    Email: true,
                    Address: true,
                    BirthDate: true,
                    Gender: true,
                    HireDate: true,
                },
            });
        } else if (user.IsEmployee) {
            userData = await prisma.empleado.findUnique({
                where: { usuarioId: id },
                select: {
                    Name: true,
                    Position: true,
                    Cellphone: true,
                    Email: true,
                    Address: true,
                    BirthDate: true,
                    Gender: true,
                    HireDate: true,
                },
            });
        } else if (user.IsAdministrator) {
            userData = {
                Name: 'Administrador',
                Email: user.Email,
            };
        }

        if (!userData) {
            return res.status(404).json({ message: 'Información no encontrada' });
        }

        res.json(userData);
    } catch (error) {
        console.error('Error al obtener el perfil:', error);
        res.status(500).json({ message: 'Error al obtener el perfil del usuario' });
    }
}
);

router.put(
    '/update',
    authenticateToken,
    async (req, res) => {

        try {
            const { id } = req.user;
            const { Name, LastName, Specialty, Cellphone, Email, Address, BirthDate, Gender, HireDate, Position } = req.body; // Extrae los datos del cuerpo de la solicitud

            if (!id) {
                return res.status(400).json({ message: 'ID de usuario no encontrado' });
            }

            const user = await prismaClient.usuarios.findUnique({
                where: { Id: id },
                select: {
                    IsDoctor: true,
                    IsEmployee: true,
                    IsAdministrator: true,
                },
            });

            if (!user) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }

            let updatedUserData;

            if (user.IsDoctor) {
                updatedUserData = await prismaClient.doctor.update({
                    where: { usuarioId: id },
                    data: {
                        Name,
                        LastName,
                        Specialty,
                        Cellphone,
                        Email,
                        Address,
                        BirthDate,
                        Gender,
                        HireDate,
                    },
                });
            } else if (user.IsEmployee) {
                updatedUserData = await prismaClient.empleado.update({
                    where: { usuarioId: id },
                    data: {
                        Name,
                        Position,
                        Cellphone,
                        Email,
                        Address,
                        BirthDate,
                        Gender,
                        HireDate,
                    },
                });
            } else if (user.IsAdministrator) {
                updatedUserData = await prismaClient.usuarios.update({
                    where: { Id: id },
                    data: {
                        Email,
                    },
                });
            }

            if (!updatedUserData) {
                return res.status(400).json({ message: 'Error al actualizar los datos' });
            }

            res.json({ message: 'Perfil actualizado correctamente' });
        } catch (error) {
            console.error('Error al actualizar el perfil:', error);
            res.status(500).json({ message: 'Error al actualizar el perfil' });
        }
    }
);


module.exports = router;
