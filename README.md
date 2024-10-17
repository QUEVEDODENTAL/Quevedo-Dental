## Requisitos previos

Asegúrate de tener instalado:

- [npm](https://www.npmjs.com/get-npm) o [yarn](https://yarnpkg.com/getting-started/install)

## Instalación de Prisma

### Paso 1: Inicializa tu proyecto

Si aún no tienes un proyecto de Node.js, crea uno nuevo:

```bash
mkdir nombre-del-proyecto
cd nombre-del-proyecto
npm init -y
```

### Paso 2: Instala Prisma CLI y el cliente de Prisma

Ejecuta el siguiente comando para instalar Prisma como dependencia de desarrollo:

```bash
npm install prisma --save-dev
```

Además, instala el cliente de Prisma:

```bash
npm install @prisma/client
```

### Paso 3: Inicializa Prisma

Ejecuta el siguiente comando para crear los archivos de configuración de Prisma:

```bash
npx prisma init
```

Esto creará una carpeta llamada `prisma` con un archivo `schema.prisma` y un archivo `.env` en la raíz de tu proyecto.

### Paso 4: Configura tu base de datos

En el archivo `.env`, configura la URL de conexión a tu base de datos. Por ejemplo, para una base de datos MySQL, podrías tener:

```
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE_NAME"
```

Asegúrate de reemplazar `USER`, `PASSWORD`, `HOST`, `PORT` y `DATABASE_NAME` con la información de tu base de datos.

### Paso 5: Define tu modelo en `schema.prisma`

Edita el archivo `schema.prisma` para definir tus modelos. Un ejemplo simple podría ser:

```prisma
model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
}
```

## Generación de Prisma Client

Después de definir tus modelos, ejecuta el siguiente comando para generar el cliente de Prisma:

```bash
npx prisma generate
```

## Migraciones

### Paso 1: Crear una migración

Ejecuta el siguiente comando para crear una nueva migración basada en tus cambios en el esquema:

```bash
npx prisma migrate dev --name nombre-de-tu-migracion
```

Esto generará un archivo de migración y aplicará los cambios a tu base de datos.

### Paso 2: Verificar las migraciones

Puedes verificar el estado de tus migraciones con:

```bash
npx prisma migrate status
```

### Paso 3: Desplegar migraciones en producción

Si deseas desplegar migraciones en un entorno de producción, utiliza:

```bash
npx prisma migrate deploy
```

## Uso de Prisma Client

Una vez que hayas generado el cliente de Prisma, puedes utilizarlo en tu aplicación. Aquí tienes un ejemplo básico:

```javascript
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@example.com',
    },
  });
  console.log(newUser);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
```

## Comandos útiles

- **Iniciar el shell de Prisma:**  
  ```bash
  npx prisma studio
  ```

- **Ver la configuración de Prisma:**  
  ```bash
  npx prisma config
  ```

## Notas

- Asegúrate de revisar la [documentación oficial de Prisma](https://www.prisma.io/docs) para más detalles sobre características avanzadas y mejores prácticas.
- Si tienes problemas específicos, consulta la [sección de soluciones](https://www.prisma.io/docs/troubleshooting) en la documentación.

---