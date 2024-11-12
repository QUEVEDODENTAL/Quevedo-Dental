# Manual de Instalación

Este documento proporciona una guía completa sobre cómo instalar, configurar, y gestionar el proyecto **Quevedo Dental**. Asegúrate de seguir todos los pasos para garantizar una instalación exitosa y un entorno funcional.


# Índice
1. [Prerrequisitos](#prerrequisitos)
1. [Instalación de Node.js, npm y pnpm](#instalación-de-nodejs-npm-y-pnpm)
1. [Instalación de MySQL Server](#instalación-de-mysql-server)
1. [Clonación e instalación de dependencias](#clonación-e-instalación-de-dependencias)
1. [Configuración de la Base de Datos](#configuración-de-la-base-de-datos)
1. [Migracion de la base de datos](#migracion-de-la-base-de-datos)
1. [Verificación y uso de la Base de Datos](#verificación-y-uso-de-la-base-de-datos)
1. [Ejecutar el Proyecto](#ejecutar-el-proyecto)
1. [Acceso desde otros equipos en la red local](#acceso-desde-otros-equipos-en-la-red-local)

---

# Prerrequisitos

Antes de comenzar, asegúrate de tener instalados los siguientes programas y herramientas en tu máquina:

1. **Node.js 20.13.0 o superior:** Plataforma de ejecución para código JavaScript y dependencias del proyecto.
2. **npm 10.9.0 o superior:** Necesario para la gestión de paquetes y dependencias del proyecto.
3. **pnpm 9.2.0 o superior:** Necesario para la gestión de paquetes y dependencias del proyecto.
4. **MySQL:** Se necesita la versión más reciente de MySQL para gestionar la base de datos. Deberás crear una contraseña durante la instalación.

Si no cuentas con alguna de estas herramientas, te mostraremos cómo instalarlas.

---

# Instalación de `Node.js, npm y pnpm`

## Instalación en ubuntu

Para instalar Node.js y npm, escribe en la línea de comandos:
```
sudo apt update && sudo apt install nodejs npm
```

Verifica que se hayan instalado correctamente con:

```
node -v
npm -v
```

Para instalar pnpm, escribe:

```
sudo npm install -g pnpm
```

Verifica que pnpm se haya instalado correctamente ejecutando:

```
pnpm -v
``` 

## Instalación en Windows

Para instalar Node.js y npm, puede descargarlo desde [la pagina oficial Node.js.](https://nodejs.org/en) Durante la instalación, asegúrate de seleccionar la opción para instalar npm, que viene incluido.

Verificamos que se hayan instalado de manera correcta con los siguientes comandos en el simbolo de sistema o powershell:

```
node -v
npm -v
```

Para instalar pnpm, escribe:

```
npm install -g pnpm
```

Verifica la instalación ejecutando:

```
pnpm -v
``` 

---


# Instalación de MySQL Server

## Instalación en Ubuntu

Actualiza el sistema abriendo una terminal y ejecutando:

```
sudo apt update && sudo apt upgrade
```

Instala MySQL Server con:

```
sudo apt install mysql-server
```

Verifica la instalación ejecutando:

```
systemctl status mysql
```

## Configuración inicial 
Accede a MySQL como root para establecer una contraseña ejecutando:

```
sudo mysql
```

Dentro de la consola de MySQL, establece la contraseña reemplazando `nueva_contraseña`:

```
ALTER USER 'root'@'localhost' IDENTIFIED BY 'nueva_contraseña';
```

Sal de la consola MySQL con el comando `exit`

Prueba el acceso con:

```
mysql -u root -p
```

Para crear un nuevo usuario:

```
CREATE USER 'nuevo_usuario'@'localhost' IDENTIFIED BY 'tu_contraseña';
GRANT ALL PRIVILEGES ON *.* TO 'nuevo_usuario'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

Sustituyendo `nuevo_usuario` por el nombre del usuario que estamos creadno y `tu_contraseña` por la contraseña para el usuario que estamos creando.

## Instalación  en windows

MySQL Workbench es una herramienta gráfica para la administración de bases de datos MySQL. Para instalarlo, sigue estos pasos:

1. Descarga MySQL Workbench desde el siguiente enlace:  
   [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)

2. Sigue las instrucciones de instalación. Durante el proceso, se te pedirá que configures una contraseña para el usuario `root`. Asegúrate de recordar esta contraseña, ya que será utilizada más adelante en la configuración del proyecto.

## Configuracion inicial
Abre el Símbolo del sistema o PowerShell y accede a MySQL con:

```
mysql -u root -p
```

Para crear un nuevo usuario, usa el comando proporcionado en la sección anterior, ajustando `nuevo_usuario` y `tu_contraseña`.

---


# Clonación e instalación de dependencias

## 1. Clona este repositorio

```
git clone https://github.com/QUEVEDODENTAL/Quevedo-Dental.git
```

## 2. Accede al directorio del proyecto

```
cd Quevedo-Dental
```

## 3. Accede a la carpeta backend del proyecto

```
cd backend
```

## 4. Instala las dependencias del proyecto

```
pnpm install
```

## 5. Regresa y accede a la carpeta fronted

```
cd ..
cd frontend
```

## 6. Instala las dependencias del proyecto

```
pnpm install
```
---

# Configuración de las variables de entorno

Crea un archivo `.env` en el directorio backend del proyecto con la configuración siguiente, reemplazando `usuario` y `contraseña` según corresponda:

```
DATABASE_URL="mysql://usuario:contraseña@localhost:3306/proyecto_salud?schema=public"
JWT_SECRET=mi_clave_secreta
```

**Nota importantes:** Asegúrate de que MySQL esté escuchando en el puerto 3306.

---

# Migración de la Base de Datos

Ingresa al directorio backend

```
cd backend
```

Ejecuta las migraciones para crear la estructura de la base de datos:

```
npx prisma migrate dev 
npx prisma migrate deploy
npx prisma generate
```

---

# Verificación y uso de la Base de Datos

Para verificar las migraciones, utiliza Prisma Studio dentro del directorio backend:

```
npx prisma studio
```

Abre `http://localhost:5555` en tu navegador y revisa los datos.

---

# Ejecutar el Proyecto

Para ejecutar el proyecto en tu entorno local, ejecuta el backend ingresando al directorio y usando:

```
pnpm run dev
```

Esto iniciará un servidor de desarrollo.

Ahora en el directorio frontend usa:

```
pnpm run dev
```
Esto iniciará un servidor con algo como http://localhost:3000/, al abrirlo mostrara nuestro frontend.

**Nota importante:** Es importante ejecutar tanto el servidor de backend como el de frontend para que el sistema funcione correctamente. 

---

# Acceso desde otros equipos en la red local

Si deseas acceder al proyecto desde otro dispositivo conectado a la misma red, necesitarás la dirección IP de tu máquina local.

1. Abre una terminal o PowerShell y ejecuta el siguiente comando:

```
ipconfig
```

2. Busca la sección "Dirección IPv4" y copia la dirección que se muestra (ejemplo: `192.168.1.100`).

3. En el navegador del otro equipo, ingresa la dirección IP seguida del puerto `3000`, por ejemplo:

```
http://192.168.1.100:3000
```

---


=======
## Requisitos previos

Asegúrate de tener instalado:

- [npm](https://www.npmjs.com/get-npm) o [yarn](https://yarnpkg.com/getting-started/install)

## Instalación de Prisma


### Paso 1: Instala Prisma CLI y el cliente de Prisma

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

## Comando para ver la base de datos prisma

- **Iniciar el shell de Prisma:**  
  ```bash
  npx prisma studio
  ```
>>>>>>> Base_De_Datos
