const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  // Datos de usuarios de prueba
  const users = [
    {
      Email: 'admin@example.com',
      Password: await bcrypt.hash('admin123', 10),
      IsAdministrator: true,
      IsDoctor: false,
      IsEmployee: false,
    },
    {
      Email: 'doctor@example.com',
      Password: await bcrypt.hash('doctor123', 10),
      IsAdministrator: false,
      IsDoctor: true,
      IsEmployee: false,
    },
    {
      Email: 'employee@example.com',
      Password: await bcrypt.hash('employee123', 10),
      IsAdministrator: false,
      IsDoctor: false,
      IsEmployee: true,
    },
  ];

  // Inserta usuarios en la base de datos
  for (const user of users) {
    await prisma.usuarios.create({
      data: user,
    });
  }

  console.log("Usuarios de prueba agregados con éxito");
}

// Ejecuta la función principal y maneja errores
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
