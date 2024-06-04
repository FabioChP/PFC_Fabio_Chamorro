# PFC_Fabio_Chamorro
![Badge en Desarollo](https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green)
![Django version 5.0.6](https://img.shields.io/badge/Django-5.0.6-green")
![React version 18.0](https://img.shields.io/badge/React-v18.0-green")
![GitHub Org's stars](https://img.shields.io/github/stars/fabiochp?style=social)

## Índice

*[Título e imagen de portada](#pfc_fabio_chamorro)

*[Índice](#índice)

*[Descripción del proyecto](#descripción-del-proyecto)

*[Características de la aplicación y demostración](#características-de-la-aplicación-y-demostración)

*[Acceso al proyecto](#acceso-al-proyecto)

*[Tecnologías utilizadas](#tecnologías-utilizadas)

*[Personas-Desarrolladores del Proyecto](#desarrolladores-del-proyecto)

## Descripción del proyecto

El propósito principal de este proyecto es diseñar y desarrollar una aplicación web avanzada que ofrezca a los usuarios la capacidad de convertir URLs extensas y complejas en versiones más cortas y manejables. Esta funcionalidad es especialmente útil para compartir enlaces en plataformas donde el espacio es limitado o donde una URL más corta es estéticamente más agradable y fácil de recordar.

La aplicación no solo se limitará a acortar URLs. También integrará una serie de características adicionales para proporcionar un valor añadido significativo a los usuarios. Entre estas características destacadas se encuentra la capacidad de generar y presentar estadísticas detalladas sobre el uso de las URLs acortadas. Esto incluirá, pero no se limitará a, el seguimiento del número total de clics que recibe cada URL acortada, lo que permitirá a los usuarios comprender mejor la popularidad y el alcance de los enlaces que comparten.

Con estas herramientas, los usuarios no solo podrán gestionar y compartir sus enlaces de manera más eficiente, sino que también podrán obtener una visión completa del impacto y la efectividad de sus URLs acortadas, mejorando así sus estrategias de comunicación y marketing en línea.

## Características de la aplicación y demostración
- `Creacion de url acortadas`: Se pueden crear urls acortadas, que serán asociadas a las urls originales y te redirigiran a estas.
- `Creación de usuarios`: Puedes crearte un usuario en la página, lo que te da acceso a la funcionalidad anterior
- `Urls asociadas a usuarios`: Cada url esta asociada a un usuario, lo cual le permite ver estadisticas sobre su url
- `Urls más usadas`: Se permite, a todos los usuarios, ver las 10 url más usadas de toda la página

## Tecnologías utilizadas
- React
  - react-router-dom
  - axios
- Django
  - pymysql
  - pyjwt
  - django-cors-headers
- CSS

## Acceso al proyecto

### Acceso al proyecto
Para descargar el codigo fuente lo mejor es hacer un fork del repositorio en github y despues clonarlo en tu máquina.
- Para el frontend: instalar React y todos los módulos necesarios.
- Para el backend: instalar Python, Django, todos los módulos necesarios y realizar las migraciones (python3 manage.py makemigrations y python3 manage.py migrate).
- Para la base de datos: instalar un servidor MySQL, ejecutar el archivo BBDD.sql y modificar la seccion del settings.py referida a la base de datos.

![imagen](https://github.com/FabioChP/PFC_Fabio_Chamorro/assets/145000582/1127943d-c16f-42b6-9c34-6654be882abf)


### Abre y ejecuta el proyecto
Los pasos para ejecutar el proyecto son:
1. Abrir el terminal en la carpeta "./PFC_Fabio_Chamorro" (cmd o equivalente).
2. Hacer "cd ./backend/urlShortener".
3. Y ejecutar "python3 ./manage.py runserver".
4. Hacer "cd ./../../frontend/url-shortener".
5. Ejecutar el comando "npm start".
6. Entrar a localhost en tu navegador preferido.

## Desarrolladores del Proyecto
#### <em>Fabio Chamorro Prado</em>
