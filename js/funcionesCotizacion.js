const url = 'http://localhost:8282/cotizacion'

const listarCotizacion = async () => {
    // Objeto del html donde se desplegará la información
    let objectId = document.getElementById('contenido');
    let contenido = ''; // Contiene filas y celdas que se desplegarán en el tbody

    // Fetch permite realizar peticiones http a una url
    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    .then((res) => res.json()) // Obtener respuesta de la petición
    .then(function (data) { // Se manipulan los datos obtenidos de la url
        let listarCotizacion = data.msg; // msg es el nombre de la lista retorna con json
        console.log(listarCotizacion);

        listarCotizacion.forEach(function (cotizacion) {
            // Se agrego esta línea para que los valores carguen en el formulario y se puedan editar para enviarlo por la url
            objetoCotizacion = Object.keys(cotizacion).map(key => key + '=' + encodeURIComponent(cotizacion[key])).join('&');
            console.log(cotizacion);

            contenido += `<tr>` +
                `<td>${cotizacion.nombreProducto}</td>` +
                `<td>${cotizacion.cantidadProducto}</td>` +
                `<td>${cotizacion.nitDocumento}</td>` +
                `<td>${cotizacion.formaPago}</td>` +
                `<td class="icons">` +
                    `<div>` +
                        `<button type="button" class="btn" onclick="redireccionarEditar('${objetoCotizacion}')">` +
                            `<img src="../img/pencil.ico" alt="" class="iconos-listar">` +
                        `</button>` +
                    `</div>` +
                    `<div>` +
                        
                            `<button type="button" class="btn" onclick="visualizar('${objetoCotizacion}')">` +
                               `<img src="../img/show.ico" alt="" class="iconos-listar">` +
                            `</button>` +
                    `</div>` +
                    `<div>` +
                        `<button type="button" class="btn" >` +
                            `<img src="../img/delete.ico" alt="" class="iconos-listar" onclick="confirmarEliminar('${cotizacion.NoCotizacion}')">` +
                        `</button>` +
                    `</div>` +
                `</td>` +
                `</tr>`;
        });

        objectId.innerHTML = contenido;
       
    });
}

const agregarCotizacion = async (datosCotizacion) => {
    // Hacer la solicitud para agregar el nuevo proveedor
    await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(datosCotizacion)
    });

    // Después de agregar el proveedor, actualizar la tabla
    listarCotizacion();
    

}

// Llamar a la función cuando se carga la página
listarCotizacion();



const registrarCotizacion= () => {
    const NoCotizacion = document.getElementById('NoCotizacion').value;
    const formaPago = document.getElementById('formaPago').value
    const ordenPedido = document.getElementById('ordenPedido').value
    const nombreRazonSocial = document.getElementById('nombreRazonSocial').value
    const nitDocumento = document.getElementById('nitDocumento').value
    const telefono = document.getElementById('telefono').value 
    const direccion = document.getElementById('direccion').value
    const correo = document.getElementById('correo').value
    const nombreProducto = document.getElementById('nombreProducto').value
    const cantidadProducto = document.getElementById('cantidadProducto').value
    
    
    if(NoCotizacion.length == 0){
        document.getElementById('noCotizacionHelp').innerHTML = 'Dato requerido'

    }
    else if(formaPago.length == 0){
        document.getElementById('formaPagoHelp').innerHTML = 'Dato requerido'
    }
    else if(ordenPedido == 0){
        document.getElementById('ordenPedidoHelp').innerHTML = 'Dato requerido'
    }
    else if(nombreRazonSocial == 0){
        document.getElementById('nombreRazonSocialHelp').innerHTML = 'Dato requerido'
    }
    else if(nitDocumento == 0){
        document.getElementById('nitDocumentoHelp').innerHTML = 'Dato requerido'
    }
    else if(telefono == 0){
        document.getElementById('telefonoHelp').innerHTML = 'Dato requerido'
    }
    
    else if(direccion == 0){
        document.getElementById('direccionHelp').innerHTML = 'Dato requerido'
    }
    else if(correo == 0){
        document.getElementById('correoHelp').innerHTML = 'Dato requerido'
    }
    else if(nombreProducto == 0){
        document.getElementById('nombreProductoHelp').innerHTML = 'Dato requerido'
    }
    else if(cantidadProducto == 0){
        document.getElementById('cantidadProductoHelp').innerHTML = 'Dato requerido'
    }
   
    else{
        let cotizacion ={
            NoCotizacion: NoCotizacion, //lo primero es la clave, lo segundo es lo que se va a enviar.
            formaPago: formaPago,
            ordenPedido: ordenPedido,
            nombreRazonSocial: nombreRazonSocial,
            nitDocumento: nitDocumento,
            telefono: telefono,
            direccion: direccion,
            correo: correo,
            nombreProducto: nombreProducto,
            cantidadProducto: cantidadProducto,
        }
        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(cotizacion), //Convertir el objeto a JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((res) => res.json())//Obtener respuesta de la petición
        .then(json => {
            alert(json.msg)//Imprimir el mensaje de la transacción
        })
    }

}

const actualizarCotizacion = () => {
    const NoCotizacion = document.getElementById('NoCotizacion').value;
    const formaPago = document.getElementById('formaPago').value
    const ordenPedido = document.getElementById('ordenPedido').value
    const nombreRazonSocial = document.getElementById('nombreRazonSocial').value
    const nitDocumento = document.getElementById('nitDocumento').value
    const telefono = document.getElementById('telefono').value 
    const direccion = document.getElementById('direccion').value
    const correo = document.getElementById('correo').value
    const nombreProducto = document.getElementById('nombreProducto').value
    const cantidadProducto = document.getElementById('cantidadProducto').value
    
 
    if(NoCotizacion.length == 0){
        document.getElementById('noCotizacionHelp').innerHTML = 'Dato requerido'

    }
    else if(formaPago.length == 0){
        document.getElementById('formaPagoHelp').innerHTML = 'Dato requerido'
    }
    else if(ordenPedido == 0){
        document.getElementById('ordenPedidoHelp').innerHTML = 'Dato requerido'
    }
    else if(nombreRazonSocial == 0){
        document.getElementById('nombreRazonSocialHelp').innerHTML = 'Dato requerido'
    }
    else if(nitDocumento == 0){
        document.getElementById('nitDocumentoHelp').innerHTML = 'Dato requerido'
    }
    else if(telefono == 0){
        document.getElementById('telefonoHelp').innerHTML = 'Dato requerido'
    }
    
    else if(direccion == 0){
        document.getElementById('direccionHelp').innerHTML = 'Dato requerido'
    }
    else if(correo == 0){
        document.getElementById('correoHelp').innerHTML = 'Dato requerido'
    }
    else if(nombreProducto == 0){
        document.getElementById('nombreProductoHelp').innerHTML = 'Dato requerido'
    }
    else if(cantidadProducto == 0){
        document.getElementById('cantidadProductoHelp').innerHTML = 'Dato requerido'
    }
   
    else{
        let cotizacion ={
            NoCotizacion: NoCotizacion, //lo primero es la clave, lo segundo es lo que se va a enviar.
            formaPago: formaPago,
            ordenPedido: ordenPedido,
            nombreRazonSocial: nombreRazonSocial,
            nitDocumento: nitDocumento,
            telefono: telefono,
            direccion: direccion,
            correo: correo,
            nombreProducto: nombreProducto,
            cantidadProducto: cantidadProducto,
        }


        // Mostrar SweetAlert para confirmar la actualización
        Swal.fire({
            title: "¿Desea guardar los cambios?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                // Si el usuario hace clic en "Sí", realizar la actualización
                fetch(url, {
                    method: 'PUT',
                    mode: 'cors',
                    body: JSON.stringify(cotizacion),
                    headers: { "Content-type": "application/json; charset=UTF-8" }
                })
                    .then((res) => res.json())
                    .then(json => {
                        alert(json.msg);
                    });
            }
        });
    }
}

// Asociar la función actualizarCompra al evento click del botón "Actualizar"
if (document.querySelector('#btnActualizar')) {
    document.querySelector('#btnActualizar')
        .addEventListener('click', actualizarCotizacion);
}




const redireccionarEditar=(objetoCotizacion) =>{
    document.location.href='registrarCotizacion.html?cotizacion='+objetoCotizacion
  
}
const editarCotizacion=() =>{ 
    console.log('Entré a editarCotizacion');
    var urlParams = new URLSearchParams(window.location.search);
    document.getElementById('NoCotizacion').value =urlParams.get('NoCotizacion')
    document.getElementById('formaPago').value =urlParams.get('formaPago')
    document.getElementById('ordenPedido').value =urlParams.get('ordenPedido')
    document.getElementById('nombreRazonSocial').value =urlParams.get('nombreRazonSocial')
    document.getElementById('nitDocumento').value =urlParams.get('nitDocumento')
    document.getElementById('telefono').value =urlParams.get('telefono')
    document.getElementById('direccion').value =urlParams.get('direccion')
    document.getElementById('correo').value =urlParams.get('correo')
    document.getElementById('nombreProducto').value =urlParams.get('nombreProducto')
    document.getElementById('cantidadProducto').value =urlParams.get('cantidadProducto')
    document.getElementById('btnActualizar').style.display = 'block';
   
    verificarEditar();
    
function verificarEditar() {
    var urlParams = new URLSearchParams(window.location.search);
    var cotizacion = urlParams.get('cotizacion');
  
    if (cotizacion) {
      // Estás en la página de edición
      document.getElementById('btnActualizar').style.display = 'block';
      document.getElementById('btnRegistrar').style.display = 'none'
    } else {
      // No estás en la página de edición
      document.getElementById('btnActualizar').style.display = 'none';
    } 
}

verificarEditar();

}
const visualizarCotizacion=() =>{ 
    var urlParams = new URLSearchParams(window.location.search);
    document.getElementById('NoCotizacion').value =urlParams.get('NoCotizacion')
    document.getElementById('formaPago').value =urlParams.get('formaPago')
    document.getElementById('ordenPedido').value =urlParams.get('ordenPedido')
    document.getElementById('nombreRazonSocial').value =urlParams.get('nombreRazonSocial')
    document.getElementById('nitDocumento').value =urlParams.get('nitDocumento')
    document.getElementById('telefono').value =urlParams.get('telefono')
    document.getElementById('direccion').value =urlParams.get('direccion')
    document.getElementById('correo').value =urlParams.get('correo')
    document.getElementById('nombreProducto').value =urlParams.get('nombreProducto')
    document.getElementById('cantidadProducto').value =urlParams.get('cantidadProducto')

   
}

const visualizar=(objetoCotizacion) =>{
    document.location.href='visualizarCotizacion.html?cotizacion='+objetoCotizacion
}


async function eliminarCotizacion(NoCotizacion) {
    try {
        const response = await fetch(`http://localhost:8282/cotizacion?NoCotizacion=${NoCotizacion}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // Puedes incluir otros encabezados si es necesario
            },
        });

        if (!response.ok) {
            throw new Error(`Error al eliminar cotizacion: ${response.status} - ${response.statusText}`);
        }
        

        const data = await response.json();
        console.log('Cotizacion  eliminada:', data.msg);

        // Puedes mostrar un mensaje de éxito al usuario si es necesario
        Swal.fire({
            position: "center",
            icon: "success",
            title: (data.msg),
            showConfirmButton: false,
            timer: 1500
          });

        // Puedes realizar otras acciones aquí si es necesario
    } catch (error) {
        console.error('Error al eliminar cotizacion:', error.message);
        // Puedes mostrar un mensaje de error al usuario si es necesario
        Swal.fire({
            position: "center",
            icon: "success",
            title: (json.msg),
            showConfirmButton: false,
            timer: 1500
          });
          setTimeout(() => {
            regresarListar();
        }, 1000);
        // Puedes manejar errores aquí según tus necesidades
    }
}

function confirmarEliminar(NoCotizacion) {
    Swal.fire({
        title: "¿Estás seguro de que deseas eliminar esta cotizacion?",        
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar"
      }).then((result) => {
        if (result.isConfirmed) {
            eliminarCotizacion (NoCotizacion);
        }
      });
}











if (document.querySelector('#btnRegistrar')){ //Si objeto existe
    document.querySelector('#btnRegistrar')
.addEventListener('click', registrarCotizacion)
}



//GET: listar/conseguir un dato en específico o todos
//PUT: Actualizar
//DELETE: ELIMINAR
//POST: Ingresar/registrar/enviar/crear
