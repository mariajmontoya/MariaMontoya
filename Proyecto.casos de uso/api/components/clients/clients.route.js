'use strict';
const express = require('express');
const router = express.Router();
const clientsApi = require('./clients.api');


router.route('/registrarClient')
    .post(function(req, res){
        clientsApi.registrar(req, res);
});

module.exports = router;