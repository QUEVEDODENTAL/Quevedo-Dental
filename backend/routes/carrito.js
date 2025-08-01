const express = require('express');
const prismaClient = require('../utils/prismaClient');

const router = express.Router();

// Endpoint para agregar el servicio al carrito
router.post('/agregar', async (req, res) => {
    const { cliente_id, service_name, price } = req.body;

    try {
        const nuevoServicio = await prismaClient.servicio.create({
            data: {
                service_name,
                price,
                cliente_id,
            },
        });
        res.status(200).json(nuevoServicio);
    } catch (error) {
        console.error('Error al agregar el servicio:', error);
        res.status(500).json({ message: 'Error al agregar el servicio' });
    }
});

// Endpoint para eliminar un servicio
router.delete('/eliminar/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await prismaClient.servicio.delete({
            where: { id: parseInt(id) },
        });
        res.status(200).json({ message: 'Servicio eliminado' });
    } catch (error) {
        console.error('Error al eliminar el servicio:', error);
        res.status(500).json({ message: 'Error al eliminar el servicio' });
    }
});
router.get('/view/:cliente_id', async (req, res) => {
    const { cliente_id } = req.params;

    try {
        const servicios = await prismaClient.servicio.findMany({
            where: { cliente_id: parseInt(cliente_id) },
        });

        res.status(200).json(servicios);
    } catch (error) {
        console.error('Error al obtener los servicios:', error);
        res.status(500).json({ message: 'Error al obtener los servicios' });
    }
});

module.exports = router;
