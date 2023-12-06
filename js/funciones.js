const url = 'http://localhost:8282/compras'

const listarCompras = async () => {
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
        let listarCompras = data.msg; // msg es el nombre de la lista retorna con json
        console.log(listarCompras);

        listarCompras.forEach(function (compra) {
            // Se agrego esta línea para que los valores carguen en el formulario y se puedan editar para enviarlo por la url
            objetoCompras = Object.keys(compra).map(key => key + '=' + encodeURIComponent(compra[key])).join('&');
            console.log(compra);

            contenido += `<tr>` +
                `<td>${compra.nombreInsumo}</td>` +
                `<td>${compra.cantidad}</td>` +
                `<td>${compra.Proveedor}</td>` +
                `<td class="icons">` +
                    `<div>` +
                        `<button type="button" class="btn" onclick="redireccionarEditar('${objetoCompras}')">` +
                            `<img src="../img/pencil.ico" alt="" class="iconos-listar">` +
                        `</button>` +
                    `</div>` +
                    `<div>` +
                        
                            `<button type="button" class="btn" onclick="visualizar('${objetoCompras}')">` +
                               `<img src="../img/show.ico" alt="" class="iconos-listar">` +
                            `</button>` +
                    `</div>` +
                    `<div>` +
                        `<button type="button" class="btn" >` +
                            `<img src="../img/delete.ico" alt="" class="iconos-listar" onclick="confirmarEliminar('${compra.numRecibo}')">` +
                        `</button>` +
                    `</div>` +
                `</td>` +
                `</tr>`;
        });

        objectId.innerHTML = contenido;
       
    });
}

const agregarCompra = async (datosCompra) => {
    // Hacer la solicitud para agregar el nuevo proveedor
    await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(datosCompra)
    });

    // Después de agregar el proveedor, actualizar la tabla
    listarCompras();
    

}

// Llamar a la función cuando se carga la página
listarCompras();



const registrarCompra= () => {
    const nombre = document.getElementById('nombreInsumo').value;
    const fecha = document.getElementById('fecha').value
    const proveedor = document.getElementById('Proveedor').value
    const recibo = document.getElementById('numRecibo').value
    const iva = document.getElementById('IVA').value
    const total = document.getElementById('total').value 
    const cantidad = document.getElementById('cantidad').value
    const precioDolar = document.getElementById('precioDolar').value

    if(nombre.length == 0){
        document.getElementById('nombreHelp').innerHTML = 'Dato requerido'

    }
    else if(fecha.length == 0){
        document.getElementById('fechaHelp').innerHTML = 'Dato requerido'
    }
    else if(proveedor == ""){
        document.getElementById('proveedorHelp').innerHTML = 'Dato requerido'
    }
    else if(recibo == 0){
        document.getElementById('reciboHelp').innerHTML = 'Dato requerido'
    }
    else if(iva == 0){
        document.getElementById('ivaHelp').innerHTML = 'Dato requerido'
    }
    else if(total == 0){
        document.getElementById('totalHelp').innerHTML = 'Dato requerido'
    }
    
    else if(cantidad == 0){
        document.getElementById('cantidadHelp').innerHTML = 'Dato requerido'
    }

    else if(precioDolar == 0){
        document.getElementById('precioDolarHelp').innerHTML = 'Dato requerido'
    }
   
    else{
        let compra ={
            nombreInsumo: nombre, //lo primero es la clave, lo segundo es lo que se va a enviar.
            fecha: fecha,
            Proveedor: proveedor,
            numRecibo: recibo,
            IVA: iva,
            total: total,
            cantidad: cantidad,
            precioDolar: precioDolar
        }
        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(compra), //Convertir el objeto a JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((res) => res.json())//Obtener respuesta de la petición
        .then(json => {
            alert(json.msg)//Imprimir el mensaje de la transacción
        })
    }

}

const actualizarCompra = () => {
    const nombre = document.getElementById('nombreInsumo').value;
    const fecha = document.getElementById('fecha').value
    const proveedor = document.getElementById('Proveedor').value
    const recibo = document.getElementById('numRecibo').value
    const iva = document.getElementById('IVA').value
    const total = document.getElementById('total').value 
    const cantidad = document.getElementById('cantidad').value
    const precioDolar = document.getElementById('precioDolar').value


    if (nombre.length == 0) {
        document.getElementById('nombreHelp').innerHTML = 'Dato requerido';
    } else if (fecha.length == 0) {
        document.getElementById('fechaHelp').innerHTML = 'Dato requerido';
    } else if (proveedor == "") {
        document.getElementById('proveedorHelp').innerHTML = 'Dato requerido';
    } else if (recibo == 0) {
        document.getElementById('reciboHelp').innerHTML = 'Dato requerido';
    } else if (iva == 0) {
        document.getElementById('ivaHelp').innerHTML = 'Dato requerido';
    } else if (total == 0) {
        document.getElementById('totalHelp').innerHTML = 'Dato requerido';
    } else if (cantidad == 0) {
        document.getElementById('cantidadHelp').innerHTML = 'Dato requerido';
    }  else if(precioDolar == 0){
        document.getElementById('precioDolarHelp').innerHTML = 'Dato requerido'
    } else {
        let compra = {
            nombreInsumo: nombre,
            fecha: fecha,
            Proveedor: proveedor,
            numRecibo: recibo,
            IVA: iva,
            total: total,
            cantidad: cantidad,
            precioDolar: precioDolar
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
                    body: JSON.stringify(compra),
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
        .addEventListener('click', actualizarCompra);
}




const redireccionarEditar=(objetoCompras) =>{
    document.location.href='registrarCompra.html?compra='+objetoCompras
  
}
const editarCompra=() =>{ 
    console.log('Entré a editarCompra');
    var urlParams = new URLSearchParams(window.location.search);
    document.getElementById('nombreInsumo').value =urlParams.get('nombreInsumo')
    document.getElementById('fecha').value =urlParams.get('fecha')
    document.getElementById('Proveedor').value =urlParams.get('Proveedor')
    document.getElementById('numRecibo').value =urlParams.get('numRecibo')
    document.getElementById('IVA').value =urlParams.get('IVA')
    document.getElementById('total').value =urlParams.get('total')
    document.getElementById('cantidad').value =urlParams.get('cantidad')
    document.getElementById('precioDolar').value =urlParams.get('precioDolar')
    document.getElementById('btnActualizar').style.display = 'block';
    
   
    verificarEditar();
    
function verificarEditar() {
    var urlParams = new URLSearchParams(window.location.search);
    var compra = urlParams.get('compra');
  
    if (compra) {
      // Estás en la página de edición
      document.getElementById('btnActualizar').style.display = 'block';
      document.getElementById('btnRegistrar').style.display = 'none'
    } else {
      // No estás en la página de edición
      document.getElementById('btnActualizar').style.display = 'none';
    } 
}



}
const visualizarCompra=() =>{ 
    var urlParams = new URLSearchParams(window.location.search);
    document.getElementById('nombreInsumo').value =urlParams.get('nombreInsumo')
    document.getElementById('fecha').value =urlParams.get('fecha')
    document.getElementById('Proveedor').value =urlParams.get('Proveedor')
    document.getElementById('numRecibo').value =urlParams.get('numRecibo')
    document.getElementById('IVA').value =urlParams.get('IVA')
    document.getElementById('total').value =urlParams.get('total')
    document.getElementById('cantidad').value =urlParams.get('cantidad')
    document.getElementById('precioDolar').value =urlParams.get('precioDolar')
}

const visualizar=(objetoCompras) =>{
    document.location.href='visualizarCompra.html?compra='+objetoCompras
}


async function eliminarCompra(numRecibo) {
    try {
        const response = await fetch(`http://localhost:8282/compras?numRecibo=${numRecibo}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // Puedes incluir otros encabezados si es necesario
            },
        });

        if (!response.ok) {
            throw new Error(`Error al eliminar compra: ${response.status} - ${response.statusText}`);
        }
        

        const data = await response.json();
        console.log('Compra  eliminada:', data.msg);

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
        console.error('Error al eliminar compra:', error.message);
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

function confirmarEliminar(numRecibo) {
    Swal.fire({
        title: "¿Estás seguro de que deseas eliminar esta compra?",        
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar"
      }).then((result) => {
        if (result.isConfirmed) {
            eliminarCompra (numRecibo);
        }
      });
}











if (document.querySelector('#btnRegistrar')){ //Si objeto existe
    document.querySelector('#btnRegistrar')
.addEventListener('click', registrarCompra)
}



//GET: listar/conseguir un dato en específico o todos
//PUT: Actualizar
//DELETE: ELIMINAR
//POST: Ingresar/registrar/enviar/crear
