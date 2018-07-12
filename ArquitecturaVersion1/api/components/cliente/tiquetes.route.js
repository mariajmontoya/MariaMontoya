'use strict';
const express = require('express');
const router = express.Router();
const tiquete = require('./tiquete.api');


router.route('/registrarTiquete')
    .post(function(req, res){
        tiquete.registrar(req, res);
});

router.route('/listarTiquete')
    .get(function(req, res){
       tiquete.listar(req, res);
});

module.exports = router;