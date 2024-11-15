const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Datos ficticios para cargar en la base de datos
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
    // Agrega más registros ficticios según sea necesario
];

async function main() {
    console.log('Cargando datos ficticios en la tabla clientes...');
    for (const cliente of clientesData) {
        await prisma.clientes.create({
            data: cliente
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
