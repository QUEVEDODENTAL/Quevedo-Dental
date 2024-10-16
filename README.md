# Manual de Instalación

Este documento proporciona una guía completa sobre cómo instalar, configurar, y gestionar el proyecto **Quevedo Dental**. Asegúrate de seguir todos los pasos para garantizar una instalación exitosa y un entorno funcional.

---

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalados los siguientes programas y herramientas en tu máquina:

1. **pnpm 9.2.0 o superior**: Necesario para la gestión de paquetes y dependencias del proyecto.
2. **MySQL**: Se necesita la versión más reciente de MySQL para gestionar la base de datos. Deberás crear una contraseña durante la instalación.
3. **Node.js 20.13.0 o superior**: Plataforma de ejecución para código JavaScript y dependencias del proyecto.

---

## Instalación de `pnpm`

pnpm es una alternativa eficiente y rápida a npm para la gestión de dependencias. Puedes instalarlo utilizando PowerShell (en Windows):

```
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

---

## Instalación de Linux en Windows con WSL

Si trabajas en un entorno Windows, es recomendable usar WSL (Windows Subsystem for Linux) para una mejor compatibilidad con herramientas de desarrollo basadas en Linux. Puedes instalar WSL ejecutando el siguiente comando en PowerShell:

```
wsl --install
```

---

## Clonación e instalación de dependencias

### 1. Clona este repositorio

Primero, clona el repositorio del proyecto a tu máquina local. Puedes hacer esto ejecutando el siguiente comando en tu terminal o PowerShell:

```
git clone https://github.com/QUEVEDODENTAL/Quevedo-Dental.git
```

### 2. Navega al directorio del proyecto

Accede al directorio donde se ha clonado el proyecto:

```
cd Quevedo-Dental
```

### 3. Instala las dependencias del proyecto

Para instalar todas las dependencias del proyecto, usa el siguiente comando:

```
npm install
```

---

## Instalación de MySQL Workbench

MySQL Workbench es una herramienta gráfica para la administración de bases de datos MySQL. Para instalarlo, sigue estos pasos:

1. Descarga MySQL Workbench desde el siguiente enlace:  
   [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)

2. Sigue las instrucciones de instalación. Durante el proceso, se te pedirá que configures una contraseña para el usuario `root`. Asegúrate de recordar esta contraseña, ya que será utilizada más adelante en la configuración del proyecto.

---

## Configuración de la Base de Datos

Para configurar la conexión a la base de datos MySQL, sigue estos pasos:

### 1. Crear un archivo `.env`

En el directorio raíz del proyecto, crea un archivo llamado `.env` donde configurarás las variables de entorno.

### 2. Editar el archivo `.env`

En el archivo `.env`, añade la siguiente configuración y reemplaza `contraseña` con la que creaste en MySQL:

```
DATABASE_URL="mysql://root:contraseña@localhost:3306/proyecto_salud?schema=public"
NEXTAUTH_URL="http://localhost:3000/"
NEXTAUTH_SECRET=TuPalabraSecreta
```

**Notas importantes:**
- **Contraseña**: Debes reemplazar `contraseña` con la contraseña que estableciste durante la instalación de MySQL.
- **Puerto 3306**: Asegúrate de que MySQL esté escuchando en el puerto 3306, el cual es el puerto predeterminado para MySQL.

---

## Ejecución de Migraciones

Para configurar la estructura de la base de datos, deberás ejecutar las migraciones con los siguientes comandos:

```
npx prisma migrate dev
npx prisma migrate deploy
npx prisma generate
```

Esto creará las tablas necesarias en la base de datos.

---

## Verificación y uso de la Base de Datos

Para asegurarte de que la base de datos y las migraciones se han aplicado correctamente, puedes utilizar Prisma Studio. Esto te permite visualizar y modificar datos desde una interfaz gráfica.

1. Ejecuta el siguiente comando:

```
npx prisma studio
```

2. Esto abrirá una interfaz gráfica en tu navegador en la dirección `http://localhost:5555`. Accede a esta URL para revisar los datos en tu base de datos.

3. Una vez en Prisma Studio, busca el modelo `usuario`. Aquí puedes añadir un correo electrónico y una contraseña para crear un nuevo usuario. Haz clic en "Guardar" cuando termines.

---

## Ejecutar el Proyecto

Para ejecutar el proyecto en tu entorno local, utiliza el siguiente comando:

```
pnpm run dev
```

Esto iniciará un servidor de desarrollo, y en la consola se mostrará un enlace similar a `http://localhost:3000`. Abre este enlace en tu navegador para ver la aplicación funcionando.

---

## Acceso desde otros equipos en la red local

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


