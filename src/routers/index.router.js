//Importacion del framework de express
const express = require('express')

//Instanciando n router
const router = express.Router()

//Importar controladores
const usuario_ctr = require("../controllers/usuarios.controller")


//Definicion de los endpoints - rutas

const version = "/api/version1"

router.get(version + "/usuarios", usuario_ctr.consultarUsuarios)
    .get(version + "/usuarios/:id", usuario_ctr.consultarUsuario)   // /usuario/1    usuarios/2
    .post(version + "/usuarios", usuario_ctr.crearUsuario)
    .put(version + "/usuarios", usuario_ctr.modificarUsuario)
    .delete(version + "/usuarios", usuario_ctr.eliminarUsuario)

    

module.exports = router