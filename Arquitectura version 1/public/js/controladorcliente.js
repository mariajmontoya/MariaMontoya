'use strict';
imprimirListaPersonas();
let botonRegistrarCliente = document.querySelector('#btnRegistrarCliente');

botonRegistrar.addEventListener('click' , obtenerDatos);

let inputNombre = document.querySelector('#txtNombre');
let inputCedula = document.querySelector('#txtCedula');
let inputProvincia = document.querySelector('#txtProvincia');
let inputCanton = document.querySelector('#txtCanton');
let inputDistrito = document.querySelector('#txtDistrito');
let inputPrimerNombre = document.querySelector('#txtPrimerNombre');
let inputPrimerApellido = document.querySelector('#txtPrimerApellido');
let inputTelefono = document.querySelector('#txtTelefono');
let inputCorreo = document.querySelector('#txtCorreo');

function obtenerDatos(){
    let infoCliente =[];
    let bError = false;

    let sNombre = inputNombre.value;    
    let nCedula = Number(inputCedula.value);
    let sProvincia = inputProvincia.value;
    let sCanton = inputCanton.value;
    let sDistrito = inputDistrito.value;
    let sUbicacion = inputUbicacion.value;
    let sPrimerNombre = inputPrimerNombre.value;
    let sPrimerApellido = inputPrimerApellido.value;
    let nTelefono = Number(inputTelefono.value);
    let nCorreo = inputCorreo.value;

    infoCliente.push(sNombre, sCedula, sProvincia, sCanton, sDistrito, sUbicacion, sPrimerNombre, sPrimerApellido,sTelefono, sCorreo);
    
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
    
}

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
}

function limpiarFormulario(){
    inputNombre.value = '';    
    inputCedula.value = '';
    inputProvincia.value = '';
    inputCanton.value = '';
    inputDistrito.value = '';
    inputUbicacion.value ='';
    inputPrimerNombre.value = '';
    inputPrimerApellido.value = '';
    inputTelefono.value = '';
    inputCorreo.value = '';
}

function imprimirListaClientes() {
    
}