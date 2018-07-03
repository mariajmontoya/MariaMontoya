'use strict';
//para que se conecte a la base de datos de mongo, necesito de mongoose
const clientModel = require('./clients.model');

module.exports.registrar = function(req, res){
    let nuevoCliente = new clientModel({
        NombreEmpresa : req.body.NombreEmpresa,
        CedulaJuridica : req.body.CedulaJuridica,
        Ubicacion : req.body.Ubicacion,
        NombreContacto : req.body.NombreContacto,
        TelefonoContacto : req.body.TelefonoContacto,
        CorreoContacto : req.body.CorreoContacto
    });

    nuevoCliente.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar el cliente, ha ocurrido un error' + error});
        }else{
            res.json({success : true, msg : 'El cliente se registró con éxito'});
        }

    });

};
