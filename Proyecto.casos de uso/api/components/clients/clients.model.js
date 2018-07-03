'use strict';
let mongoose = require('mongoose');

let clientSchema = new mongoose.Schema({
    NombreEmpresa : {type : String, unique : true, required : true},
    CedulaJuridica : {type : Number, unique : true, required: true},
    Ubicacion : {type : String, required : true},
    NombreContacto : {type : String, required : true},
    TelefonoContacto : {type : Number, required : true},
    CorreoContacto : {type : String, required : true}
});

module.exports = mongoose.model('Client', clientSchema);