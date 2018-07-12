'use strict';
let mongoose = require('mongoose');

let MensajeSchema = new mongoose.Schema({
    Autor : {type : String},
    Destinatario: {type : String},
    Cuerpo : {type : String},
    Asunto : {type : String},
    Fecha : {type : String},
    
});

module.exports = mongoose.model('Mensaje', MensajeSchema);