const express = require('express');
const bcrypt = require('bcryptjs');
const prismaClient = require('../utils/prismaClient');

const router = express.Router();

router.post('/register', async (req, res) => {
    const {
        name, lastName, age, birthDate, gender, specialty, address,
        cellphone, curp, licenseNumber, sex, medicalLicense, email,
        hireDate, password
    } = req.body;

    // Validación de campos obligatorios
    if (!email || !name || !lastName || !password) {
        return res.status(400).json({ error: 'Campos obligatorios faltantes' });
    }
    // Verificar si el email ya existe en la base de datos
    try {
        const existingDoctor = await prismaClient.doctor.findUnique({ where: { Email: email } });
        if (existingDoctor) return res.status(400).json({ error: 'Correo en uso.' });
        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);
        // Datos para el registro del doctor
        const result = await prismaClient.$transaction(async (prisma) => {
            const doctor = await prisma.doctor.create({
                data: {
                    Name: name,
                    LastName: lastName,
                    Age: age ? parseInt(age) : null,
                    BirthDate: birthDate ? new Date(birthDate) : null,
                    Gender: gender || null,
                    Specialty: specialty,
                    Address: address,
                    Cellphone: cellphone,
                    CURP: curp,
                    LicenseNumber: licenseNumber,
                    Sex: sex,
                    MedicalLicense: medicalLicense,
                    Email: email,
                    HireDate: hireDate ? new Date(hireDate) : new Date(),
                    Password: hashedPassword
                }
            });
            const usuario = await prisma.usuarios.create({ data: { Email: email, Password: hashedPassword, IsDoctor: true } });
            return { doctor, usuario };
        });

        res.status(201).json({ message: 'Doctor registrado', result });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error al registrar doctor' });
    }
});

module.exports = router;
