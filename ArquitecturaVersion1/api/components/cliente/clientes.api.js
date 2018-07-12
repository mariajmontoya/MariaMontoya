'use strict';
//sobre registro clientes
const clienteModel = require('./clientes.model');

module.exports.registrar = function(req, res){
    let nuevoCliente = new clienteModel({
        Nombre : req.body.Nombre,
        Cedula : req.body.Cedula,
        Provincia: req.body.Provincia,
        Canton :  req.body.Canton,
        Distrito :  req.body.Distrito,
        Ubicacion : req.body.Ubicacion,
        PrimerNombre : req.body.PrimerNombre,
        PrimerApellido :  req.body.PrimerApellido,
        Telefono : req.body.Telefono,
        Correo : req.body.Correo,
    });

    nuevoCliente.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar el cliente, ha ocurrido un error' + error});
        }else{
            res.json({success : true, msg : 'El cliente se registró con éxito'});
        }

    });

};
module.exports.listar = function(req, res){
    clienteModel.find().then(
        function(clientes){
            res.send(usclientes);
        });
};


//sobre mensajeria
const mensajeModel = require('./mensajes.model');

module.exports.registrar = function(req, res){
    let nuevoMensaje = new mensajeModel({
        Autor : req.body.Autor,
        Destinatario : req.body.Destinatario,
        Cuerpo : req.body.Cuerpo,
        Asunto :  req.body.Asunto,
        Fecha :  req.body.Fecha,
       
    });

    nuevoMensaje.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo enviar el mensaje, ha ocurrido un error' + error});
        }else{
            res.json({success : true, msg : 'El mensaje se envio con éxito'});
        }

    });

};
module.exports.listar = function(req, res){
    mensajeModel.find().then(
        function(mensajes){
            res.send(mensajes);
        });
};


