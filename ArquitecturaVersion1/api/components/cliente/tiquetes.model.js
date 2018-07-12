'use strict';
let mongoose = require('mongoose');

let tiqueteSchema = new mongoose.Schema({
    codigotiquete : {type : Number, unique : true, required : true},
    nombreempresa : {type : String, required : true},
    cedula : {type : Number, unique : true, required : true},
    descripcion : {type : String, required : true},
    fecha: {type : Date, required : true},
    estado: {type : String, required : true},
    nombrecontacto : {type : String, required : true},
    apellidocontacto : {type : String, required : true},
    telefonocontacto : {type : Number, required : true},
    correocontacto : {type : String, required : true},
});

module.exports = mongoose.model('Tiquete', tiqueteSchema); 


