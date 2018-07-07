'use strict';


function registrarCliente(paInfoCliente){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrarCliente',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            Nombre : paInfoPersona[0],
            Cedula : paInfoPersona[1],
            Provincia : paInfoPersona[2],
            Canton : paInfoPersona[3],
            Distrito : paInfoPersona[5],
            Ubicacion : paInfoPersona[6],
            NombreContacto : paInfoPersona[7],
            ApellidoContacto : paInfoPersona[8],
            TelefonoContacto : paInfoPersona[9],
            CorreoContacto : paInfoPersona[10]

        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}
function obtenerListaClientes(){
    let listaClientes = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/listar_usuarios',
        type : 'get',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
    
    return listaClientes;
}