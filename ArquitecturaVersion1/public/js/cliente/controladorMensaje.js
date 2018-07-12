'use strict'


/*Sobre registro/listar/filtrar de mensajeria*/
imprimirListaMensajes();
let botonEnviar = document.querySelector('#btnEnviar');

botonEnviar.addEventListener('click' , obtenerDatos);

let inputAutor = document.querySelector('#txtAutor');
let inputDestinatario = document.querySelector('#txtDestinatario');
let inputCuerpo = document.querySelector('#txtCuerpo');
let inputAsunto = document.querySelector('#txtAsunto');
let inputFecha= document.querySelector('#txtFecha');

function obtenerDatos(){
    let infoMensaje =[];
    let bError = false;

    
    let sAutor = inputNombre.value;
    let sDestinatario = Number(inputCedula.value);
    let sCuerpo = inputProvincia.value;
    let sAsunto = inputCanton.value;
    let sFecha = inputDistrito.value;

    infoCliente.push(sAutor, sdestinatario, sCuerpo, sAsunto, sFecha,);
    
    bError = validar();
    if(bError == true){
        swal({
            type : 'warning',
            title : 'No se pudo enviar el mensaje',
            /*text: 'Por favor revise los campos en rojo',*/
            confirmButtonText : 'Entendido'
        });
        
        console.log('No se pudo enviar el mensaje');
    }else{
        registrarCliente(infoCliente);
        swal({
            type : 'success',
            title : 'Envio exitoso',
            text: 'El mensaje se envio adecuadamente',
            confirmButtonText : 'Entendido'
        });
        imprimirListaMensajes();
        limpiarFormulario();
    }
    
}

function imprimirListaMensajes() {
    let listaMensajes = obtenerListaMensajes();
    let tbody = document.querySelector('#tblMensajes tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < listaMensajes.length; i++){
        let fila = tbody.insertRow();

        let cAutor = fila.insertCell();
        let cDestinatario = fila.insertCell();
        let cCuerpo = fila.insertCell();
        let cAsunto = fila.insertCell();
        let cfecha = fila.insertCell();

        cAutor.innerHTML = listaMensajes[i]['Autor'];
        cDestinatario.innerHTML = listaMensajes[i]['Destinatario'];
        cCuerpo.innerHTML = listaMensajes[i]['Cuerpo'];
        cAsunto.innerHTML = listaMensajes[i]['Asunto'];
        cfecha.innerHTML = listaMensajes[i]['Fecha'];

    }

};