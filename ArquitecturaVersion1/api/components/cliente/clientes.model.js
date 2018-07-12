'use strict';

let mongoose = require('mongoose');

let clienteSchema = new mongoose.Schema({
    Nombre : {type : String, required : true},
    Cedula : {type : Number, unique : true, required: true},
    Provincia : {type : String, required: true},
    Canton : {type : String, required: true},
    Distrito : {type : String, required: true},
    Ubicacion : {type : String, required: true},
    PrimerNombre : {type : String, required: true},
    PrimerApellido : {type : String, required : true},
    Telefono : {type : Number, required : true},
    Correo : {type : String, required : true},
});

module.exports = mongoose.model('Cliente', clienteSchema);