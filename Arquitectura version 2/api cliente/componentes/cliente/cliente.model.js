'use strict';
let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    NombreEmpresa : {type : String, required : true},
    CedulaJuridica : {type : Number, required: true},
    Provincia : {type : String, required : true},
    Canton : {type : Number, required : true},
    Distrito : {type : String, required : true},
    Ubicacion : {type : String, required : true},
    NombreContacto : {type : String, required : true},
    ApellidoContacto : {type : String, required : true},
    TelefonoContacto : {type : Number, required : true},
    CorreoContacto : {type : String, required : true},
});

module.exports = mongoose.model('Cliente', ClienteSchema);