function validarNombreInsumo() {
    var inputNombre = document.getElementById('nombreInsumo');
    var mensajeErrorInsumo = document.getElementById('mensajeErrorNombreInsumo');

    // Expresión regular para validar que solo contiene letras (sin espacios)
    var regex = /^[A-Za-z\s]+$/;

    if (regex.test(inputNombre.value)) {
        inputNombre.classList.remove('invalido');
        inputNombre.classList.add('valido');
        mensajeErrorInsumo.textContent = '';
    } else {
        inputNombre.classList.remove('valido');
        inputNombre.classList.add('invalido');
        mensajeErrorInsumo.textContent = 'Ingrese un nombre válido (solo letras).';
    }
}


function validarNumRecibo() {
    var inputNumRecibo = document.getElementById('numRecibo');
    var mensajeErrorRecibo = document.getElementById('mensajeErrorRecibo');

    var regex = /^\d+$/;  // La expresión regular ahora acepta uno o más dígitos
    var numRecibo = inputNumRecibo.value;  // Obtén el valor del input

    if (regex.test(numRecibo)) {
        inputNumRecibo.classList.remove('invalido');
        inputNumRecibo.classList.add('valido');
        mensajeErrorRecibo.textContent = '';

    } else {
        inputNumRecibo.classList.remove('valido');
        inputNumRecibo.classList.add('invalido');
        mensajeErrorRecibo.textContent = 'Ingrese un número de compra válido.';
    }
}
function validarFecha() {
    var inputFecha = document.getElementById('fecha');
    var mensajeErrorFecha = document.getElementById('mensajeErrorFecha');

    // Expresión regular para el formato de fecha (año-mes-día)
    var regex = /^\d{4}-\d{2}-\d{2}$/;

    var fecha = inputFecha.value; // Obtén el valor del input

    if (regex.test(fecha)) {
        inputFecha.classList.remove('invalido');
        inputFecha.classList.add('valido');
        mensajeErrorFecha.textContent = '';
    } else {
        inputFecha.classList.remove('valido');
        inputFecha.classList.add('invalido');
        mensajeErrorFecha.textContent = 'Ingrese una fecha válida en el formato año-mes-día.';
    }
}


function validarCantidadI() {
    var inputCantidadI = document.getElementById('cantidad');
    var mensajeError = document.getElementById('mensajeErrorCantidadI');

    var regex = /^\d+$/;  // La expresión regular ahora acepta uno o más dígitos
    var cantidadI= inputCantidadI.value;  // Obtén el valor del input

    if (regex.test(cantidadI)) {
        inputCantidadI.classList.remove('invalido');
        inputCantidadI.classList.add('valido');
        mensajeError.textContent = '';
    
    } else {
        inputCantidadI.classList.remove('valido');
        inputCantidadI.classList.add('invalido');
        mensajeError.textContent = 'Ingrese una cantidad válida.';
    }
}






function validarIVA() {
    var inputIVA = document.getElementById('IVA');
    var mensajeErrorIVA = document.getElementById('mensajeErrorIVA');

    // La expresión regular ahora acepta uno o más dígitos, seguido opcionalmente por un punto y más dígitos
    var regex = /^\d+(\.\d+)?%?$/;
    var IVA = inputIVA.value;  // Obtén el valor del input

    if (regex.test(IVA)) {
        inputIVA.classList.remove('invalido');
        inputIVA.classList.add('valido');
        mensajeErrorIVA.textContent = '';
    } else {
        inputIVA.classList.remove('valido');
        inputIVA.classList.add('invalido');
        mensajeErrorIVA.textContent = 'Ingrese una cantidad válida.';
    }
}


function validarTotal() {
    var inputTotal = document.getElementById('total');
    var mensajeErrorTotal = document.getElementById('mensajeErrorTotal');

    var regex = /^\d+$/;  // La expresión regular ahora acepta uno o más dígitos
    var total = inputTotal.value;  // Obtén el valor del input

    if (regex.test(total)) {
        inputTotal.classList.remove('invalido');
        inputTotal.classList.add('valido');
        mensajeError.textContent = '';

    } else {
        inputTotal.classList.remove('valido');
        inputTotal.classList.add('invalido');
        mensajeErrorTotal.textContent = 'Ingrese un total válido.';
    }
}



//modal




