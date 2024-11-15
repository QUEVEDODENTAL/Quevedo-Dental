const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database with doctors and employees...');

    // Generar contraseñas encriptadas
    const password = await bcrypt.hash('securepassword123', 10);

    // Datos de ejemplo para doctores
    const doctorsData = [
        {
            Name: 'Carlos',
            LastName: 'Gómez',
            Age: 45,
            BirthDate: new Date('1978-06-15'),
            Gender: 'Masculino',
            Specialty: 'Cardiología',
            Address: 'Calle Luna 123, Ciudad Estrella',
            Cellphone: '5551234567',
            CURP: 'GOMC780615HMCLNR03',
            LicenseNumber: 'LIC-12345',
            Sex: 'Masculino',
            MedicalLicense: 'MED-45678',
            Email: 'carlos.gomez@clinic.com',
            HireDate: new Date('2015-01-10'),
            Password: password,
        },
        {
            Name: 'María',
            LastName: 'Fernández',
            Age: 39,
            BirthDate: new Date('1984-03-20'),
            Gender: 'Femenino',
            Specialty: 'Pediatría',
            Address: 'Calle Sol 456, Ciudad Aurora',
            Cellphone: '5557654321',
            CURP: 'FERM840320MMCLNR09',
            LicenseNumber: 'LIC-67890',
            Sex: 'Femenino',
            MedicalLicense: 'MED-78901',
            Email: 'maria.fernandez@clinic.com',
            HireDate: new Date('2018-05-15'),
            Password: password,
        },
    ];

    // Datos de ejemplo para empleados
    const employeesData = [
        {
            Name: 'Juan',
            LastName: 'López',
            BirthDate: new Date('1990-07-12'),
            Gender: 'Masculino',
            Cellphone: '5559876543',
            Email: 'juan.lopez@clinic.com',
            Address: 'Calle Estrella 789, Ciudad Estrella',
            Position: 'Recepcionista',
            CURP: 'LOPJ900712HMCLNR06',
            RFC: 'LOPJ9007123R0',
            Salary: 15000.0,
            HireDate: new Date('2020-08-01'),
            Password: password,
        },
        {
            Name: 'Ana',
            LastName: 'Martínez',
            BirthDate: new Date('1988-12-03'),
            Gender: 'Femenino',
            Cellphone: '5556543210',
            Email: 'ana.martinez@clinic.com',
            Address: 'Calle Cometa 321, Ciudad Aurora',
            Position: 'Asistente Médica',
            CURP: 'MARA881203MMCLNR04',
            RFC: 'MARA8812033R0',
            Salary: 18000.0,
            HireDate: new Date('2019-03-20'),
            Password: password,
        },
    ];

    // Insertar datos en la tabla "doctores"
    for (const doctor of doctorsData) {
        await prisma.doctor.create({ data: doctor });
    }

    // Insertar datos en la tabla "empleados"
    for (const employee of employeesData) {
        await prisma.empleado.create({ data: employee });
    }

    console.log('Doctores y empleados creados exitosamente.');
}

main()
    .catch((error) => {
        console.error('Error al cargar datos:', error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
