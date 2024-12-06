const express = require('express');
const router = express.Router();
const prisma = require('../utils/prismaClient'); // Asegúrate de importar correctamente tu cliente Prisma

// Obtener todos los servicios
router.get('/view', async (req, res) => {
    try {
        const servicios = await prisma.servicios.findMany();
        res.json(servicios);
    } catch (error) {
        console.error('Error al obtener los servicios:', error);
        res.status(500).json({ error: 'Error al obtener los servicios' });
    }
});

// Crear un nuevo servicio
router.post('/add', async (req, res) => {
    const { Service_Name, Price } = req.body;
    if (!Service_Name || !Price) {
        return res.status(400).json({ error: 'Nombre del servicio y precio son obligatorios' });
    }

    try {
        const nuevoServicio = await prisma.servicios.create({
            data: { Service_Name, Price: parseFloat(Price) },
        });
        res.status(201).json(nuevoServicio);
    } catch (error) {
        console.error('Error al crear el servicio:', error);
        res.status(500).json({ error: 'Error al crear el servicio' });
    }
});

// Eliminar un servicio
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const servicioEliminado = await prisma.servicios.delete({
            where: { Id: parseInt(id) },
        });
        res.json(servicioEliminado);
    } catch (error) {
        console.error('Error al eliminar el servicio:', error);
        res.status(500).json({ error: 'Error al eliminar el servicio' });
    }
});

// Editar un servicio (Opcional)
router.put('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { Service_Name, Price } = req.body;

    if (!Service_Name && !Price) {
        return res.status(400).json({ error: 'Debe proporcionar al menos un campo para actualizar' });
    }

    try {
        const servicioActualizado = await prisma.servicios.update({
            where: { Id: parseInt(id) },
            data: {
                ...(Service_Name && { Service_Name }),
                ...(Price && { Price: parseFloat(Price) }),
            },
        });
        res.json(servicioActualizado);
    } catch (error) {
        console.error('Error al actualizar el servicio:', error);
        res.status(500).json({ error: 'Error al actualizar el servicio' });
    }
});

module.exports = router;
