'use strict';
//para que se conecte a la base de datos de mongo, necesito de mongoose
const clienteModel = require('./clientes.model');

module.exports.registrar = function(req, res){
    let nuevoMensaje = new mensajeModel({
        Autor : req.body.Autor,
        Destinatario: req.body.Destinatario,
        Cuerpo: req.body.Cuerpo,
        Asunto :  req.body.Asunto,
        Fecha :  req.body.Fecha,
    
    });

    nuevoMensaje.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo envar el mensaje, ha ocurrido un error' + error});
        }else{
            res.json({success : true, msg : 'El mensaje se envio con éxito'});
        }

    });

};
module.exports.listar = function(req, res){
    mensajeModel.find().then(
        function(usuarios){
            res.send(usuarios);
        });
};