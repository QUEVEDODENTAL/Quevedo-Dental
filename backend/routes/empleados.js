const express = require('express');
const bcrypt = require('bcryptjs');
const prismaClient = require('../utils/prismaClient');

const router = express.Router();

// Registro de empleado con manejo de contraseña y transacción
router.post('/register', async (req, res) => {
    const {
        name, lastName, birthDate, gender, cellphone, email,
        address, position, curp, rfc, salary, hireDate, password
    } = req.body;

    if (!email || !name || !lastName || !password) {
        return res.status(400).json({ error: 'Campos obligatorios faltantes' });
    }

    try {
        const existingEmployee = await prismaClient.empleado.findUnique({
            where: { Email: email },
        });

        if (existingEmployee) {
            return res.status(400).json({ error: "El correo electrónico ya está en uso." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const employeeData = {
            Name: name,
            LastName: lastName,
            BirthDate: birthDate ? new Date(birthDate) : null,
            Gender: gender,
            Cellphone: cellphone,
            Email: email,
            Address: address,
            Position: position,
            CURP: curp,
            RFC: rfc,
            Salary: salary ? parseFloat(salary) : null,
            HireDate: hireDate ? new Date(hireDate) : new Date(),
            Password: hashedPassword
        };

        const usuarioData = {
            Email: email,
            Password: hashedPassword,
            IsEmployee: true,
        };

        const result = await prismaClient.$transaction(async (prisma) => {
            const employee = await prisma.empleado.create({ data: employeeData });

            const usuario = await prisma.usuarios.create({
                data: usuarioData,
            });

            return { employee, usuario };
        });

        res.status(201).json({ message: 'Empleado y usuario registrados exitosamente', result });
    } catch (error) {
        console.error('Error al registrar empleado y usuario:', error);
        res.status(500).json({ error: 'Error al registrar el empleado y el usuario' });
    }
});

// Obtener todos los empleados
router.get('/', async (req, res) => {
    try {
        const empleados = await prismaClient.empleado.findMany({
            select: {
                id: true,
                Name: true,
                LastName: true,
                Position: true,
                Email: true,
                Cellphone: true,
                Salary: true,
                HireDate: true,
            },
        });
        res.status(200).json(empleados);
    } catch (error) {
        console.error('Error al obtener empleados:', error);
        res.status(500).json({ error: 'Error al obtener la lista de empleados' });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const empleado = await prismaClient.empleado.findUnique({
            where: { id: parseInt(id) },
            select: {
                id: true,
                Name: true,
                LastName: true,
                Position: true,
                Email: true,
                Cellphone: true,
                Salary: true,
                HireDate: true,
                Address: true,
                CURP: true,
                RFC: true,
            },
        });

        if (!empleado) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }

        res.status(200).json(empleado);
    } catch (error) {
        console.error('Error al obtener detalles del empleado:', error);
        res.status(500).json({ error: 'Error al obtener los detalles del empleado' });
    }
});

module.exports = router;