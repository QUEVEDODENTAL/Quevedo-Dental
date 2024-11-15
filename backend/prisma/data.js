import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import bcrypt from 'bcryptjs';


// Generar contraseñas encriptadas
const password = await bcrypt.hash('securepassword123', 10);

// Datos de administrador  
const users = [
    {
        Email: 'admin@admin.com',
        Password: await bcrypt.hash('admin123', 10),
        IsAdministrator: true,
        IsDoctor: false,
        IsEmployee: false,
    },
];

// Datos de clientes
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
        Education: 'Licenciatura'
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
        Education: 'Maestría'
    },
    {
        Name: 'Carlos',
        LastName: 'López',
        SEX: 'Masculino',
        Age: 40,
        BirthDate: new Date('1984-11-08'),
        Address: 'Calle Segunda, Guadalajara',
        Phone: '3321237890',
        CURP: 'LOPC841108HDFRTN03',
        Email: 'carlos.lopez@example.com',
        BloodType: 'B+',
        Occupation: 'Contador',
        Education: 'Licenciatura'
    },
];

// Datos de doctores
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

// Datos de empleados
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



async function main() {
    console.log('Cargando datos ficticios en la tabla clientes...');

    // Insertar datos de clientes
    for (const cliente of clientesData) {
        await prisma.clientes.create({
            data: cliente
        });
    }

    // Insertar usuarios (como administrador)
    for (const user of users) {
        await prisma.usuarios.create({
            data: user,
        });
    }

    // Insertar doctores y crear sus usuarios
    for (const doctor of doctorsData) {
        const createdDoctor = await prisma.doctor.create({
            data: doctor
        });

        // Crear un usuario para el doctor
        await prisma.usuarios.create({
            data: {
                Email: createdDoctor.Email,
                Password: createdDoctor.Password,
                IsDoctor: true,
                IsEmployee: false,  // Asegurarse de que sea un doctor, no un empleado
            }
        });
    }

    // Insertar empleados y crear sus usuarios
    for (const employee of employeesData) {
        const createdEmployee = await prisma.empleado.create({
            data: employee
        });

        // Crear un usuario para el empleado
        await prisma.usuarios.create({
            data: {
                Email: createdEmployee.Email,
                Password: createdEmployee.Password,
                IsDoctor: false,  // Asegurarse de que sea un empleado, no un doctor
                IsEmployee: true,
            }
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