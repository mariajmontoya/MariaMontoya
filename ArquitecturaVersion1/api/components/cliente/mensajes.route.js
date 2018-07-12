'use strict';
const express = require('express');
const router = express.Router();
const mensajes = require('.mensajes.api');


router.route('/registrarMensajes')
    .post(function(req, res){
    mensaje.registrar(req, res);
});

router.route('/listarMensajes')
    .get(function(req, res){
    mensaje.listar(req, res);
});

module.exports = router;