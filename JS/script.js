
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


function agregarProducto(nombre, precio) {
    
    const productoExistente = carrito.find(producto => producto.nombre === nombre);

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        
        const producto = { nombre, precio, cantidad: 1 };
        carrito.push(producto);
    }


    localStorage.setItem('carrito' , JSON.stringify(carrito));
    
    actualizarTabla();
    actualizarTotal();
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    actualizarTabla();
    actualizarTotal();
}

function actualizarTabla() {
    const tabla = document.getElementById('tablaCarrito').getElementsByTagName('tbody')[0];
    tabla.innerHTML = '';


            carrito.forEach((producto , index) => {
        const row = tabla.insertRow();

        const cellNombre = row.insertCell(0);
        cellNombre.textContent = producto.nombre;

        const cellPrecio = row.insertCell(1);
        cellPrecio.textContent = `${producto.precio}`;

        const cellCantidad = row.insertCell(2);
        cellCantidad.textContent = producto.cantidad;

        const cellAccion = row.insertCell(3);
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Borrar';
        btnEliminar.onclick = () => eliminarProducto(index);
        cellAccion.appendChild(btnEliminar);
    });
}

function actualizarTotal() {
    let total = 0;

    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });

    const totalInput = document.querySelector('.total');
    totalInput.value = `${total.toFixed(2)}`;
    
}

actualizarTabla();

actualizarTotal();