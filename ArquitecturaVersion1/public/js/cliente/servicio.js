'use strict';


/*Sobre Registro Cliente*/
function registrarCliente(paInfoCliente){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrarClientes',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            Nombre: paInfoCliente[0],
            Cedula : paInfoCliente[1],
            Provincia : paInfoCliente[2],
            Canton : paInfoCliente[3],
            Distrito : paInfoCliente[4],
            Ubicacion : paInfoCliente[5],
            PrimerNombre : paInfoCliente[6],
            PrimerApellido : paInfoCliente[7],
            Telefono: paInfoCliente[8],
            Correo: paInfoCliente[9]
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
        url : 'http://localhost:4000/api/listarClientes',
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

/*Sobre Mensajeria*/
function registrarMensaje(paInfoMensaje){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrarMensajes',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            Autor: paInfoMensaje[0],
            Destinatariola : paInfoMensaje[1],
            Cuerpo : paInfoMensaje[2],
            Asunto : paInfoMensaje[3],
            Fecha : paInfoMensaje[4],
            
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}
function obtenerListaMensajes(){
    let listaMensajes = [];

    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/listarMensajes',
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
    
    return listaMensajes;
}



