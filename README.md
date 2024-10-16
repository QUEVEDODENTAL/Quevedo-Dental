# Manual de Instalacion.
Esta documentación proporciona una guía sobre cómo Instalar para gestionar y realizar la migración.

## Prerrequisitos

 * pnpm 9.2.0 o superior
 * MySQL Product Archives(Crear contraseña)
 * NodeJs 20.13.0 o superior 

## Instalación de pnpm para ejecucion del proyecto

```
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

## Instalación de Linux en Windows con WSL
```
wsl --install
```

## Instalación Programas 

1. Clona este repositorio en tu máquina local:

```
git clone (https://github.com/QUEVEDODENTAL/Quevedo-Dental.git)
```

2. Navega hasta el directorio del proyecto:
   
```
cd quevedo_dental
```

3. Instala las dependencias del proyecto:
```
npm install
```

## Instalacion de Mysql Workbench
1. Dirigirse al link anexado para poder descargarlo
   
```
https://dev.mysql.com/downloads/workbench/
```

Una ves instalado mysql hacer el proceso de instalación y se le pedira una contraseña.

## Configuracion de la Base De Datos.

1. Crea un archivo .env

2. Edita el archivo ´.env´ con los detalles de la base de datos a lo cual modificara la contraseña.

Nota 1: Donde dice contraseña hay que poner la que creo en mysql.
Nota 2: El numero 3306 es el puerto de la base datos.

```
DATABASE_URL="mysql://root:contraseña@localhost:3306/proyecto_salud?schema=public"

NEXTAUTH_URL="http://localhost:3000/"

NEXTAUTH_SECRET=TuPalabraSecreta
`````

## Ejecucion de Migración.

Genera y Migra el schema de Base de datos.

````
npx prisma migrate dev
npx prisma migrate deploy
npx prisma generate
````

## Modo de uso de Base de Datos
1. Para ver que se haya ejecutado correctamente ejecutamos el comando.
```
npx prisma studio
```
despues de poner  comando  le aparecerá  http://localhost:5555 

dando click url lo mandara  la página  y despues  dar en  el + en donde  les desplegara  OPEN MODEL  debera buscar usuario le abrira una pagina en donde tendra que poner un correo y contraseña y despues le da en aguardar

## Ejecuta el proyecto.
Para poder ejecutar el proyecto pondremos el comando anexo en la terminal para poder vizualizarlo.

````
 pnpm run dev
````
 
Aparecera un link ese link hay que copiarlo y digirirnos a nuestro navegador y pondremos el link el cual sera  http://localhost:3000 para ver la aplicación en funcionamiento.

## Visualiza en otro equipo

Pero si es en otro equipo en donde se está ejecutando tendremos que abrir el cmd de tu equipo y escribir  ipconfig, cuando termine de ejecutarse este comando busca un apartado que diga dirección IPv4.

```
ipconfig
```

Dada la dirección IPv4 que te de te diriges a tu navegador y pones
http://140.10.6.142:3000