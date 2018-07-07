'use strict';
const clienteModel = require('./cliente.model');

//Función para registrar un usuario
module.exports.registrar = function(req, res){
    //Crea una variable nuevoUsuario utilizando como plantilla el userModel
    let nuevoUsuario = new clienteModel({
        Nombre : req.body.Nonbre,
        Cedula : req.body.Cedula,
        Provincia : req.body.Provincia,
        Canton : req.body.Canton,
        Distrito : req.body.Distrito,
        Ubicacion : req.body.Ubicacion,
        NombreContacto : req.body.NombreContacto,
        TelefonoContacto : req.body.TelefonoContacto,
        CorreoContacto : req.body.CorreoContacto
    });

    nuevoCliente.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar el cliente, ocurrió el siguiente error' + error});
        }else{
            res.json({success : true, msg : 'El cliente se registró con éxito'});
        }

    });

};

module.exports.listar = function(req, res){
    clientModel.find().then(
        function(clientes){
            res.send(clientes);
        });
};