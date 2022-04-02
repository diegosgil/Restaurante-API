// Importacion del framework de express
const express = require('express')

// Agregar configuracion al process.env
require("../config/index.config")

// Instanciar la aplicacion
const app = express()

// Aplcar middleware que permite leer los json del body 
app.use(express.json())

//Integrando el router con la app
const router = require("./routers/index.router")
app.use(router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Puerto donde se levanta el servidor web
// Puerto donde esta escuchando la API
const PORT = process.env.PORT 
// Levantar la API que estará escuchando en el PUERTO 3000
// 1. Primer parametro: Puerto
// 2. Segundo parametro: Callback
app.listen(PORT, () => {
  console.log(`API escuchando en: http://localhost:${PORT}`)
})
