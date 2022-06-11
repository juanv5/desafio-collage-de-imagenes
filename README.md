# Desafio-Collage-de-Imagenes

## Instrucciones

Ingresar a la terminal y usar los comandos:

- `npm init`
- `npm install express --save`
- `npm install --save express-fileupload`
- `npm i --save body-parser`
- `git init`

Abrir el servidor en [http://localhost:3000] para cargar las imagenes

Abrir ruta [http://localhost:3000/collage] para ver y eliminar imágenes del collage

## Requerimientos

1. Integrar express-fileupload a Express.
2. Definir que el límite para la carga de imágenes es de 5MB.
3. Responder con un mensaje indicando que se sobrepasó el límite especificado.
4. Crear una ruta POST /imagen que reciba y almacene una imagen en una carpeta
pública del servidor. Considerar que el formulario envía un payload con una
propiedad “position”, que indica la posición del collage donde se deberá mostrar la
imagen.
5. Crear una ruta GET /deleteImg/:nombre que reciba como parámetro el nombre de
una imagen y la elimine de la carpeta en donde están siendo alojadas las imágenes.
Considerar que esta interacción se ejecuta al hacer click en alguno de los números
del collage.

### Dependencias

1. body-parser: 1.20.0
2. express: 4.18.1
3. express-fileupload: 1.4.0
4. nodemon: 2.0.16

### Integrantes

- Maria Jose Ramirez [http://github.com/mjramirez1]
- Juan Vega Díaz [http://github.com/juanv5]
