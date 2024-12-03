const express = require('express');
const prismaClient = require('../utils/prismaClient');

const router = express.Router();

router.get('/', async (req, res) => {
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

router.get('/:id', async (req, res) => {
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

module.exports = router;
