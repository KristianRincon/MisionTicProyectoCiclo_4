const express = require('express')
const app = express()

//Importar conexión MongoDB
const archivoBD = require('./conexion')

//Importacion del archivo de rutas y modelo de usuario
const rutausuario = require('./rutas/usuario')

//Importaar body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.unsubscribe(bodyParser.urlencoded({ extended: 'true' }))

app.use('/api/usuario', rutausuario)

app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend Node.js. Corriendo')
})

//Configurar server básico
app.listen(5000, function () {
    console.log('El servidor NODE esta corriendo correctamente')
})