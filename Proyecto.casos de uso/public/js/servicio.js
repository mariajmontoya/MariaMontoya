'use strict';


function GuardarCliente(paInfoCliente){
    let respuesta = '';
    let peticion = $.ajax({
        url : 'http://localhost:4000/api/registrar_usuario',
        type : 'post',
        contentType : 'application/x-www-form-urlencoded; charset=utf-8',
        dataType : 'json',
        async : false,
        data:{
            NombreEmpresa : paInfoPersona[0],
            CedulaJuridica : paInfoPersona[1],
            Ubicacion : paInfoPersona[2],
            NombreContacto : paInfoPersona[3],
            TelefonoContacto: paInfoPersona[4],
            correoContacto: paInfoPersona[5]
        }
      });
    
      peticion.done(function(response){
       respuesta = response;
      });
    
      peticion.fail(function(response){
       
      });

      return respuesta;
}
