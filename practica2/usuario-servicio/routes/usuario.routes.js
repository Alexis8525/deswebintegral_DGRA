const express = require('express');
const router = express.Router();
const usuarioControlador = require('../controladores/usuarioControlador');
router.get('/', usuarioControlador.getAllUsuarios);
router.post('/', usuarioControlador.crearUsuario);
module.exports = router;