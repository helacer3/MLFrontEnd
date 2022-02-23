# Finder ML

Desarrollo realizado con el entorno de programación **NodeJS** para el BackEnd y el framework JS **React** para el FrontEnd

- Para los estilos de la aplicación se hizo uso del procesador: SASS
- Para generar los archivos CSS automáticamente y configuración adicional del proyecto react, se hizo uso de: Webpack
- Para la creación del API, se hizo uso de las librerías: express y body-parser
- Se crearon test unitarios para el backEnd, basados en la librería mocha, complementada con supertest y chai. Para correr dichos test, se debe hacer uso del comando: mocha "estando ubicado en el directorio backEnd"

## Instalación en local

Tanto el BackEnd como el FrontEnd manejan su propio archivo package.json, lo que permite que cada app, tenga sus librerías de forma independiente y facilitar así, el despliegue de la aplicaci[on, depediendo la distribución o arquitectura que se defina para los servidores de test y/o producción.

Teniendo en cuenta lo anterior, el procedimiento de instalación es el siguiente:

- validar tanto en frontEnd como en backEnd el archivo: config/config.js si los parámetros son correctos o se requiere alguna modificación.
- clonar Repositorio
- ingresar por consola al directorio frontEnd 
- npm install
- npm start
- ingresar por consola al directorio backEnd 
- npm install
- npm start
- se verifica en cada consola que los servicios estén arriba
- acceder a la URL base del frontEnd: http://localhost:8000/ 

<img src="/frontEnd/src/assets/homeImage.JPG" alt="MercadoLibre"/>