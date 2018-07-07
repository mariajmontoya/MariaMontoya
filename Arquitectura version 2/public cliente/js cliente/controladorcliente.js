'use strict';
let botonRegistrar = document.querySelector('#btnRegistrar');

botonRegistrar.addEventListener('click' , obtenerDatos);

let inputNombre = document.querySelector('#txtNombre');
let inputCedula = document.querySelector('#txtCedula');
let inputProvincia = document.querySelector('#txtProvinvia');
let inputCanton = document.querySelector('#txttCanton');
let inputDistrito = document.querySelector('#txtDistrito');
let inputUbicacion = document.querySelector('#txtUbicacion');
let inputNombreContacto = document.querySelector('#txtNombreContacto');
let inputApellidoContacto = document.querySelector('#txtApellidoContacto');
let inputTelefonoContacto = document.querySelector('#txtTelefonoContacto');
let inputCorreoContacto = document.querySelector('#txtCorreoContacto');

function obtenerDatos(){
    let infoCliente =[];
    let bError = false;

    let sNombre = inputNombre.value;    
    let nCedula = Number(inputCedula).value;
    let sProvincia = inputProvincia.value;
    let sCanton = inputCanton.value;
    let sDistrito = inputDistrito .value;
    let sUbicacion = inputUbicacion.value;
    let sNombreContacto = inputNombreContacto.value;
    let sApellidoContacto= inputApellidoContacto.value;
    let nTelefonoContacto = Number(inputTelefonoContacto).value;
    let sCorreoContacto = inputCorreoContacto.value;
    

    infoPersona.push(sNombre, sCedula, sProvincia, nCanton, sDistrito, sUbicacion, sNombreContacto, sApellidoContacto, sTelefonoContacto, sCorreoContacto);
    
    bError = validar();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo registrar el cliente',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText : 'Entendido'
        });
        console.log('No se pudo registrar el cliente');
    }else{
        registrarPersona(infoPersona);
        swal({
            type : 'success',
            title : 'Registro exitoso',
            text: 'El cliente se registró adecuadamente',
            confirmButtonText : 'Entendido'
        });
        imprimirListaPersonas();
        limpiarFormulario();
    }
    
};
function imprimirListaClientes(){
    let listaClientes = obtenerListaClientes();
    let tbody = document.querySelector('#tblCliente tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaClientes.length; i++){
        let fila = tbody.insertRow();

        let cNombre = fila.insertCell();
        let cCedula = fila.insertCell();
        let cProvincia= fila.insertCell();
        let cCanton = fila.insertCell();
        let cDistrito = fila.insertCell();
        let cUbicacion = fila.insertCell();
        let cNombreContacto = fila.insertCell();
        let cApellidoContacto = fila.insertCell();
        let cTelefonoContacto = fila.insertCell();
        let cCorreoContacto = fila.insertCell();
       

        cNombre.innerHTML = listaCliente[i][0];
        cCedula.innerHTML = listaCliente[i][1];
        cProvincia.innerHTML = listaCliente[i][2];
        cCanton.innerHTML = listaCliente[i][3];
        cDistrito.innerHTML = listaCliente[i][4];
        cUbicacion.innerHTML = listaCliente[i][5];
        cNombreContacto.innerHTML = listaCliente[i][6];
        cApellidoContacto.innerHTML = listaCliente[i][7];
        cTelefonoContacto.innerHTML = listaCliente[i][8];
        cCorreoContacto.innerHTML = listaCliente[i][9];
       
    }

};

function validar(){
    let bError = false;

    let regexSoloLetras = /^[a-z A-ZáéíóúÁÉÍÓÚñÑ]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/;

    //Validación del nombre de empresa
    if(inputNombre.value == '' || (regexSoloLetras.test(inputNombre.value)==false) ){
        inputNombre.classList.add('error_input');
        bError = true;
    }else{
        inputNombre.classList.remove('error_input');
    }

    //Validación del Cédula
    if(inputCedula.value == ''){
        inputCedula.classList.add('error_input');
        bError = true;
    }else{
        inputCedula.classList.remove('error_input');
    }

    //Validación del Provincia
    if(inputProvincia.value == ''){
        inputProvincia.classList.add('error_input');
        bError = true;
    }else{
        inputProvincia.classList.remove('error_input');
    }

    //Validación del Canton
    if(inputCanton.value == ''){
        inputCanton.classList.add('error_input');
        bError = true;
    }else{
        inputCanton.classList.remove('error_input');
    }

    //Validación del Distrito
    if(inputDistrito.value == ''){
        inputDistrito.classList.add('error_input');
        bError = true;
    }else{
        inputDistrito.classList.remove('error_input');
    }

    //Validación de la Ubicacion
    if(inputUbicacion.value == ''){
        inputDistrito.classList.add('error_input');
        bError = true;
    }else{
        inputUbicacion.classList.remove('error_input');
    }

    //Validación del NombreContacto
    if(inputNombreContacto.value == ''){
        inputDistrito.classList.add('error_input');
        bError = true;
    }else{
        inputNombreContacto.classList.remove('error_input');
    }

    //Validación del ApellidoContacto
    if(inputApellidoContacto.value == ''){
        inputDistrito.classList.add('error_input');
        bError = true;
    }else{
        inputApellidoContacto.classList.remove('error_input');
    }

    //Validación del TelefonoContacto
    if(inputTelefonoContacto.value == ''){
        inputTelefono.classList.add('error_input');
        bError = true;
    }else{
        inputTelefonoContacto.classList.remove('error_input');
    }
    
    //Validación del CorreoContcto
    if(inputCorreoContacto.value == ''){
        inputEmail.classList.add('error_input');
        bError = true;
    }else{
        inputCorreoContacto.classList.remove('error_input');
    }

    return bError;
};

function limpiarFormulario(){
    inputNombre.value = '';    
    inputCedula.value = '';
    inputProvincia.value ='';
    inputCanton.value = '';
    inputDistrito.value = '';
    inputUbicacion.value = '';
    inputNombreContacto.value = '';
    inputApellidoContacto.value = '';
    inputTelefonoContacto.value = '';
    inputCorreoContacto.value = '';
}