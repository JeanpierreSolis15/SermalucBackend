# Sermaluc Project

## Descripción
* Este proyecto es un servidor backend implementado en Node.js. Está diseñado para crear notificaciones programadas que se envían a través de Firebase Cloud Messaging.

## Arquitectura
* El proyecto utiliza una arquitectura modular con la siguiente estructura de carpetas:

- controllers: Contiene la lógica de negocio para las rutas del servidor.
- node_modules: Directorio generado por NPM que almacena las dependencias del proyecto.
- public/views: Directorio para almacenar archivos EJS que pueden ser utilizados para renderizar vistas si es necesario.
- src: Contiene el punto de entrada principal (index.js) del servidor y otros módulos de soporte.

## APIs
- Se ha definido una API para programar la creación de notificaciones:

- POST /scheduleCreate: Acepta un cuerpo de solicitud con nombre, descripcion, fechaHora, y token. Programa una notificación para ser enviada en la fechaHora especificada.
Comandos para ejecución
- Para utilizar este proyecto, debes instalar primero las dependencias y luego iniciar el servidor:

- npm install       # Instala todas las dependencias del proyecto
- npm start         # Inicia el servidor en modo producción
- npm run dev       # Inicia el servidor en modo desarrollo con nodemon
## Dependencias
- El proyecto utiliza varias dependencias importantes:

- express: Framework para la creación del servidor HTTP.
- firebase-admin: SDK de Firebase para interactuar con Firebase Cloud Messaging.
- node-schedule: Para programar tareas en el servidor.