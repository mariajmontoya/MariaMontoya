'use strict';

//para que se conecte a la base de datos de mongo, necesito de mongoose
const mensajeModel = require('./mensajes.model');


module.exports.listar = function(req, res){
    mensajeModel.find().then(
        function(usuarios){
            res.send(usuarios);
        });
};