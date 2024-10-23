import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Agregar un usuario
  const newUser = await prisma.usuarios.create({
    data: {
      Email: 'usuario@example.com',
      Password: 'securepassword',
      IsAdministrator: false,
      IsDoctor: false,
      IsEmployee: true,
    },
  });
  console.log('Usuario creado:', newUser);

  // Agregar un cliente
  const newClient = await prisma.clientes.create({
    data: {
      Name: 'Juan',
      LastName: 'Pérez',
      SEX: 'Masculino',
      Age: 30,
      BirthDate: new Date('1994-01-01'),
      Address: 'Calle Falsa 123',
      Phone: '555-1234',
      CURP: 'PEPJ940101HDFRNS08',
      Email: 'juan.perez@example.com',
      BloodType: 'O+',
      Occupation: 'Ingeniero',
      Education: 'Licenciatura',
    },
  });
  console.log('Cliente creado:', newClient);

  // Agregar un doctor
  const newDoctor = await prisma.doctor.create({
    data: {
      Name: 'Dra. Ana',
      LastName: 'García',
      Age: 35,
      BirthDate: new Date('1988-05-15'),
      Gender: 'Femenino',
      Specialty: 'Dentista',
      Address: 'Avenida Siempre Viva 742',
      Cellphone: '555-5678',
      CURP: 'GARH880515MDFGNR01',
      LicenseNumber: '123456',
      Sex: 'Femenino',
      MedicalLicense: 'ML-12345',
      Email: 'ana.garcia@example.com',
      HireDate: new Date(),
    },
  });
  console.log('Doctor creado:', newDoctor);

  // Agregar una enfermedad
  const newDisease = await prisma.enfermedades.create({
    data: {
      DiseaseType: 'Cardiovasculares',
      Other: 'Infarto',
      Causes: 'Estilo de vida poco saludable',
      Symptoms: 'Dolor en el pecho',
      Treatment: 'Medicamentos y cambios en el estilo de vida',
    },
  });
  console.log('Enfermedad creada:', newDisease);

  // Agregar un servicio
  const newService = await prisma.servicios.create({
    data: {
      Service_Name: 'Limpieza dental',
      Price: 500.00,
    },
  });
  console.log('Servicio creado:', newService);

  // Agregar un registro en la bitácora
  const newLog = await prisma.bitacora.create({
    data: {
      User: 'admin',
      Action: 'Registro creado',
      Tabla: 'usuarios',
      Description: 'Se creó un nuevo usuario.',
    },
  });
  console.log('Registro de bitácora creado:', newLog);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
