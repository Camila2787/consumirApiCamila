//CotizacionValidaciones


function validarNoCotizacion() {
    var inputNoCotizacion = document.getElementById('noCotizacion');
    var mensajeErrorNoCotizacion = document.getElementById('mensajeErrorNoCotizacion');

    // Expresión regular para validar que solo contiene letras (sin espacios)
    var regex = /^[0-9]+$/;

    if (regex.test(inputNoCotizacion.value)) {
        inputNoCotizacion.classList.remove('invalido');
        inputNoCotizacion.classList.add('valido');
        mensajeErrorNoCotizacion.textContent = '';
    } else {
        inputNoCotizacion.classList.remove('valido');
        inputNoCotizacion.classList.add('invalido');
        mensajeErrorNoCotizacion.textContent = 'Ingrese un número de cotización válido (solo números).';
    }
}


function validarFormaPago() {
    var inputFormaPago = document.getElementById('formaPago');
    var mensajeErrorFormaPago = document.getElementById('mensajeErrorFormaPago');

    var regex = /^[A-Za-z\s]+$/; // Solo letras, sin espacios


    if (regex.test(inputFormaPago.value)) {
        inputFormaPago.classList.remove('invalido');
        inputFormaPago.classList.add('valido');
        mensajeErrorFormaPago.textContent = '';
    } else {
        inputFormaPago.classList.remove('valido');
        inputFormaPago.classList.add('invalido');
        mensajeErrorFormaPago.textContent = 'Ingrese una forma de pago válida (solo letras).';
    }
}

function validarOrdenPedido() {
    var inputOrdenPedido = document.getElementById('ordenPedido');
    var mensajeErrorOrdenPedido = document.getElementById('mensajeErrorOrdenPedido');

    var regex = /^[0-9]+$/;  // La expresión regular ahora acepta uno o más dígitos
    var ordenPedido= inputOrdenPedido.value;  // Obtén el valor del input

    if (regex.test(ordenPedido)) {
        inputOrdenPedido.classList.remove('invalido');
        inputOrdenPedido.classList.add('valido');
        mensajeErrorOrdenPedido.textContent = '';
    
    } else {
        inputOrdenPedido.classList.remove('valido');
        inputOrdenPedido.classList.add('invalido');
        mensajeErrorOrdenPedido.textContent = 'Ingrese la orden en números.';
    }
}

function validarRazonSocial() {
    var inputNombreRazonSocial = document.getElementById('nombreRazonSocial');
    var mensajeErrorRazonSocial = document.getElementById('mensajeErrorRazonSocial');

    // La expresión regular ahora permite solo letras y espacios
    var regex = /^[A-Za-z\s]+$/;
    var nombreRazonSocial = inputNombreRazonSocial.value;  // Obtén el valor del input

    if (regex.test(nombreRazonSocial)) {
        inputNombreRazonSocial.classList.remove('invalido');
        inputNombreRazonSocial.classList.add('valido');
        mensajeErrorRazonSocial.textContent = '';
    } else {
        inputNombreRazonSocial.classList.remove('valido');
        inputNombreRazonSocial.classList.add('invalido');
        mensajeErrorRazonSocial.textContent = 'Ingrese un nombre válido(solo letras y espacios)';
    }
}


function validarNitDocumento() {
    var inputNitDocumento = document.getElementById('nitDocumento');
    var mensajeErrorNitDocumento= document.getElementById('mensajeErrorNitDocumento');

    // La expresión regular ahora permite solo numeros y maximo 10
    var regex = /^\d{1,10}$/;
    var nitDocumento = inputNitDocumento.value;  // Obtén el valor del input

    if (regex.test(nitDocumento)) {
        inputNitDocumento.classList.remove('invalido');
        inputNitDocumento.classList.add('valido');
        mensajeErrorNitDocumento.textContent = '';
    } else {
        inputNitDocumento.classList.remove('valido');
        inputNitDocumento.classList.add('invalido');
        mensajeErrorNitDocumento.textContent = 'Ingrese un NIT/documento válido.';
    }
}

function validarTelefono() {
    var inputTelefono = document.getElementById('telefono');
    var mensajeErrorTelefono= document.getElementById('mensajeErrorTelefono');

    // La expresión regular ahora permite solo numeros y maximo 10
    var regex = /^\d{1,10}$/;
    var telefono = inputTelefono.value;  // Obtén el valor del input

    if (regex.test(telefono)) {
        inputTelefono.classList.remove('invalido');
        inputTelefono.classList.add('valido');
        mensajeErrorTelefono.textContent = '';
    } else {
        inputTelefono.classList.remove('valido');
        inputTelefono.classList.add('invalido');
        mensajeErrorTelefono.textContent = 'Ingrese un telefono/cel válido.';
    }
}

function validarDireccion() {
    var inputDireccion = document.getElementById('direccion');
    var mensajeErrorDireccion= document.getElementById('mensajeErrorDireccion');

    // La expresión regular ahora permite numeros, letras y caracteres pero con limite de 40.
    var regex =/^[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{1,40}$/;
    var Direccion = inputDireccion.value;  // Obtén el valor del input

    if (regex.test(Direccion)) {
        inputDireccion.classList.remove('invalido');
        inputDireccion.classList.add('valido');
        mensajeErrorDireccion.textContent = '';
    } else {
        inputDireccion.classList.remove('valido');
        inputDireccion.classList.add('invalido');
        mensajeErrorDireccion.textContent = 'Ingrese una direccion válida.';
    }
}


function validarCorreo() {
    var inputCorreo = document.getElementById('correo');
    var mensajeErrorCorreo= document.getElementById('mensajeErrorCorreo');

    
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var correo = inputCorreo.value;  // Obtén el valor del input

    if (regex.test(correo)) {
        inputCorreo.classList.remove('invalido');
        inputCorreo.classList.add('valido');
        mensajeErrorCorreo.textContent = '';
    } else {
        inputCorreo.classList.remove('valido');
        inputCorreo.classList.add('invalido');
        mensajeErrorCorreo.textContent = 'Ingrese un correo válido(por favor asegurese de incluir el @).';
    }
}

function validarNombreProducto() {
    var inputProductoCot = document.getElementById('nombreProducto');
    var mensajeErrorProductoCot = document.getElementById('mensajeErrorNombreProducto');

    // La expresión regular ahora permite solo letras y espacios
    var regex = /^[A-Za-z\s]+$/;
    var nombreProductoCot = inputProductoCot.value;  // Obtén el valor del input

    if (regex.test(nombreProductoCot)) {
        inputProductoCot.classList.remove('invalido');
        inputProductoCot.classList.add('valido');
        mensajeErrorProductoCot.textContent = '';
    } else {
        inputProductoCot.classList.remove('valido');
        inputProductoCot.classList.add('invalido');
        mensajeErrorProductoCot.textContent = 'Ingrese un nombre válido(solo letras y espacios)';
    }
}

function validarCantidadProducto() {
    var inputCantidadProducto = document.getElementById('cantidadProducto');
    var mensajeErrorCantidadProducto = document.getElementById('mensajeErrorCantidadProducto');

    // Expresión regular para validar que solo contiene letras (sin espacios)
    var regex = /^[0-9]+$/;

    if (regex.test(inputCantidadProducto.value)) {
        inputCantidadProducto.classList.remove('invalido');
        inputCantidadProducto.classList.add('valido');
        mensajeErrorCantidadProducto.textContent = '';
    } else {
        inputCantidadProducto.remove('valido');
        inputCantidadProducto.classList.add('invalido');
        mensajeErrorCantidadProducto.textContent = 'Ingrese una cantidad válida.';
    }
}



