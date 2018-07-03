'use strict';
imprimirListaPersonas();
let botonRegistrar = document.querySelector('#btnRegistrar');

botonRegistrar.addEventListener('click' , obtenerDatos);

let inputNombre = document.querySelector('#txtNombre');
let inputEmail = document.querySelector('#txtEmail');
let inputTelefono = document.querySelector('#txtTelefono');
let inputEdad = document.querySelector('#txtEdad');
let inputContrasenna = document.querySelector('#txtContrasenna');
let inputConfirmacion = document.querySelector('#txtConfirmacion');

function obtenerDatos(){
    let infoCliente =[];
    let bError = false;

    let sNombreEmpresa = inputNombreEmpresa.value;    
    let sCedulaJuridica = inputCedulaJuridica.value;
    let sUbicacion = inputUbicacion.value;
    let sNombreContacto = Number(inputNombreContacto.value);
    let sTelefonoContacto = inputTelefonoContacto.value;
    let sCorreoContacto = inputCorreoContacto.value;

    infoCliente.push(sNombreEmpresa, sCedulaJuridica, sUbicacion, sNombreContacto, sTelefonoContacto, sCorreoContacto);
    
    bError = validar();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo registrar el usuario cliente',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText : 'Entendido'
        });
        console.log('No se pudo registrar el usuario');
    }else{
        registrarCliente(infoCliente);
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text: 'El Cliente usuario se registró adecuadamente',
            confirmButtonText : 'Entendido'
        });
        limpiarFormulario();
    }
    
};

function validar(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;

    //Validación del NombreEmpresa
    if(inputNombreEmpresa.value == '' || (regexSoloLetras.test(inputNombreEmpresa.value)==false) ){
        inputNombreEmpresa.classList.add('error_input');
        bError = true;
    }else{
        inputNombreEmpresa.classList.remove('error_input');
    }
    //Validación de la CedulaJuridica
    if(inputCedulaJuridica.value == ''){
        inputCedulaJuridica.classList.add('error_input');
        bError = true;
    }else{
        inputCedulaJuridica.classList.remove('error_input');
    }
    //Validación de la Ubicacion
    if(inputUbicacion.value == ''){
        inputUbicacion.classList.add('error_input');
        bError = true;
    }else{
        inputUbicacion.classList.remove('error_input');
    }
    //Validación del NombreContacto
    if(inputNombreContacto.value == '' ){
        inputNombreContacto.classList.add('error_input');
        bError = true;
    }else{
        inputNombreContacto.classList.remove('error_input');
    }

    //Validación de la TelefonoContacto
    if(inputTelefonoContacto.value == '' || (regexSoloNumeros.test(inputTelefonoContacto.value) == false) ){
        inputTelefonoContacto.classList.add('error_input');
        bError = true;
    }else{
        inputTelefonoContacto.classList.remove('error_input');
    }

    //Validación de la CorreoContacto
    if(inputCorreoContacto.value == '' ){
        inputCorreoContacto.classList.add('error_input');
        bError = true;
    }else{
        inputCorreoContacto.classList.remove('error_input');
    }

    return bError;
};

function limpiarFormulario(){
    inputNombreEmpresa.value = '';    
    inputCedulaJuridica.value = '';
    inputUbicacion.value ='';
    inputNombreContacto.value = 0;
    inputTelefonoContacto.value = '';
    inputCorreocontacto.value = '';
}