'use strict';
const express = require('express');
const router = express.Router();
const cliente = require('./clientes.api');


router.route('/registrarClientes')
    .post(function(req, res){
    cliente.registrar(req, res);
});

router.route('/listarClientes')
    .get(function(req, res){
    cliente.listar(req, res);
});

module.exports = router;