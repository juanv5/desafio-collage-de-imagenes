// 1.-Paso
const express = require("express")
const expressFileUpload = require("express-fileupload")
const path = require("path")
const bodyParser = require("body-parser")
const app = express()
const fs = require('fs')

app.listen(3000)
console.log("server ON http://localhost:3000")

//midleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//carpeta publica
app.use('/', express.static("public"))

//2.- middleware 

app.use(expressFileUpload({
    limits: { fileSize: 5000000 },
    abortOnLimit: true,

    // y limite del peso del archivo
    responseOnLimit: "El peso del archivo que intentas subir supera el limite permitido ",
}));

//ruta raiz

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/formulario.html')
})

app.get("/collage", (req, res) => {
    res.sendFile(__dirname + '/collage.html')
})

//4.- creacion de ruta POST

app.post('/imagen', (req, res) => {
    console.log(req.body)
    const { target_file } = req.files;
    const { posicion } = req.body;
    target_file.mv(`${__dirname}/public/imgs/imagen-${posicion}.jpg`, (err) => {
        res.redirect("/collage")

    });
});

//5.- creacion ruta GET

app.get('/deleteImg/:nombre', (req, res) => {
    const { nombre } = req.params
    fs.unlink(`${__dirname}/public/imgs/${nombre}`, (err) => {
        res.redirect("/collage")
    })
})