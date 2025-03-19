
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

let stockTotal = [
    {name:"ANGEL FANTASM" , price: 1200 , img: "assets/images/ANGEL-FANTASM-MUGLER.jpg" },
    {name:"dune edt" , price: 799 , img:"assets/images/dune-edt.jpg" },
    {name:"green tea fig" , price: 3299 , img:"assets/images/green-tea-fig-edt.jpg" },
    {name:"IDOLE L'INTENSE" , price: 4999 , img:"assets/images/IDOLE-L'INTENSE-EDP-75ML.jpg" },
    {name:"in2u men" , price: 999 , img: "assets/images/in2u-men-edt.jpg" },
    {name:"iris edp cher" , price: 599 , img:"assets/images/iris-edp-cher.jpg" },
    {name:"k by dolcegabbana" , price: 3599 , img:"assets/images/k-by-dolce_gabbana-edt.jpg" },
    {name:"L'EAU D'ISSEY" , price: 2499 , img:"assets/images/L'EAU-D'ISSEY-POUR-HOMME.jpg" }
]
    const nombre = document.getElementsByClassName('product-name');
    const precio = document.getElementsByClassName('price');
    const imagen = document.getElementsByClassName('img');
    const btn = document.getElementsByClassName('btnComprar');

    
    stockTotal.forEach(function(stock,index) {
        if (nombre[index]) nombre[index].textContent = `${stock.name}`;
        if (precio[index]) precio[index].textContent = `$${stock.price}`;
        if (imagen[index]) imagen[index].src = `${stock.img}`;

        if (btn[index]) {
            btn[index].addEventListener('click', function() {
                agregarProducto(stock.name, stock.price);
            });
        }
    });


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
    totalInput.value = `$${total.toFixed(2)}`;
    
}

actualizarTabla();

actualizarTotal();