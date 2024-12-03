const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

const clientesData = [
    {
        Name: 'Juan',
        LastName: 'Pérez',
        SEX: 'Masculino',
        Age: 35,
        BirthDate: new Date('1988-05-14'),
        Address: 'Calle 123, Ciudad de México',
        Phone: '5551234567',
        CURP: 'PEHJ880514HDFRNN08',
        Email: 'juan.perez@example.com',
        BloodType: 'O+',
        Occupation: 'Ingeniero',
        Education: 'Licenciatura',
    },
    {
        Name: 'María',
        LastName: 'García',
        SEX: 'Femenino',
        Age: 29,
        BirthDate: new Date('1995-03-22'),
        Address: 'Avenida Siempre Viva 456, Monterrey',
        Phone: '8187654321',
        CURP: 'GARM950322MNLFTR09',
        Email: 'maria.garcia@example.com',
        BloodType: 'A+',
        Occupation: 'Doctora',
        Education: 'Maestría',
    },
];

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
        MedicalLicense: 'MED-45678',
        Email: 'carlos.gomez@clinic.com',
        HireDate: new Date('2015-01-10'),
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
        MedicalLicense: 'MED-78901',
        Email: 'maria.fernandez@clinic.com',
        HireDate: new Date('2018-05-15'),
    },
];

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
    },
];

async function main() {
    console.log('Cargando datos ficticios...');

    // Generar contraseña
    const password = await bcrypt.hash('password123', 10);

    // Insertar usuario administrador
    await prisma.usuarios.create({
        data: {
            Email: 'admin@admin.com',
            Password: password,
            IsAdministrator: true,
            IsDoctor: false,
            IsEmployee: false,
        },
    });

    // Insertar datos de clientes
    for (const cliente of clientesData) {
        await prisma.clientes.create({
            data: cliente,
        });
    }

    // Insertar datos de doctores
    for (const doctor of doctorsData) {

        const createdDoctor = await prisma.doctor.create({
            data: {
                ...doctor,
                Password: password,
            },
        });

        await prisma.usuarios.create({
            data: {
                Email: createdDoctor.Email,
                Password: password,
                IsDoctor: true,
                IsEmployee: false,
            },
        });
    }

    // Insertar datos de empleados
    for (const employee of employeesData) {

        const createdEmployee = await prisma.empleado.create({
            data: {
                ...employee,
                Password: password,
            },
        });

        await prisma.usuarios.create({
            data: {
                Email: createdEmployee.Email,
                Password: password,
                IsDoctor: false,
                IsEmployee: true,
            },
        });
    }

    console.log('Datos ficticios cargados exitosamente.');
}

main()
    .catch((e) => {
        console.error('Error al cargar datos:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
