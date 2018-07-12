'use strict';
const tiqueteModel = require('./tiquete.model');

module.exports.registrar = function(req, res){
    let nuevoTiquete = new tiqueteModel({
        codigotiquete : req.body.codigotiquete,
        nombreempresa : req.body.nombreempresa,
        cedula : req.body.cedula,
        descripcion : req.body.descripcion,
        fecha: req.body.fecha,
        estado : req.body.estado,
        nombrecontacto : req.body.nombrecontacto,
        apellidocontacto : req.body.apellidocontacto,
        telefonocontacto : req.body.telefonocontacto,
        correocontacto : req.body.correocontacto,
    });

    nuevoTiquete.save(function(error){
        if(error){
            res.json({success : false, msg : 'No se pudo registrar el proyecto, ocurrió el siguiente error' + error});
        }else{
            res.json({success : true, msg : 'El proyecto se registró con éxito'});
        }

    });

};


module.exports.listar = function(req, res){
    tiqueteModel.find().then(
        function(tiquetes){
            res.send(tiquetes);
        });
};
