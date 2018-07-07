'use strict';
const express = require('express');
const router = express.Router();
const cliente = require('./cliente.api');


router.route('/registrarCliente')
    .post(function(req, res){
        cliente.registrar(req, res);
});

module.exports = router;