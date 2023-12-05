# Coffee Listing Page

Este proyecto es una página de listado de cafés que utiliza React para crear un componente de tarjeta reutilizable. Los usuarios pueden ver una lista de cafés con información detallada, como nombre, imagen, precio, calificación y número de votos (si está disponible). Además, la página permite filtrar los cafés disponibles y muestra una etiqueta de popularidad y estado de disponibilidad de manera condicional.

## Instalación

1. Clona este repositorio: `git clone https://github.com/tu-usuario/nombre-del-repo.git`
2. Ingresa al directorio del proyecto: `cd nombre-del-repo`
3. Instala las dependencias: `npm install`

## Uso

1. Ejecuta la aplicación: `npm run dev`
2. Abre tu navegador en [http://localhost:5173/](http://localhost:5173/) para ver la página de listado de cafés.

## Componente de Tarjeta Reutilizable

El componente de tarjeta (`Products.js`) se encuentra en la carpeta `src/components`. Puede ser utilizado en diferentes partes del proyecto para mostrar información de los cafés.

## Datos

Los datos de los cafés se obtienen de una API proporcionada o se pueden cargar desde un archivo JSON. Se utiliza una solicitud GET para obtener la información necesaria para mostrar en la página.

## Funcionalidades

- **Listado de Cafés:** Muestra una lista de cafés con información detallada.
- **Filtrado:** Los usuarios pueden optar por ver todos los productos o solo los productos disponibles.
- **Componente Reutilizable:** La tarjeta de café puede ser utilizada para mostrar información de manera consistente en diferentes partes de la aplicación.

## Deployment

El proyecto está desplegado y disponible en [Demo URL](enlace-del-demo).

## Contribución

¡Las contribuciones son bienvenidas! Si deseas mejorar esta aplicación, puedes seguir estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama: `git checkout -b mejora-xyz`
3. Haz tus cambios y haz commit: `git commit -am 'Añade nueva funcionalidad'`
4. Haz push a la rama: `git push origin mejora-xyz`
5. Envía un pull request

## Autor

Este proyecto fue sacado de [DevChallenges](https://devchallenges.io/challenge/45)