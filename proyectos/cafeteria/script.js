document.addEventListener('DOMContentLoaded', () => {
    // Ocultar el preloader cuando la página esté completamente cargada después de un retraso de 2 segundos
    window.onload = function() {
        setTimeout(() => {
            const preloader = document.getElementById('preloader');
            const container = document.querySelector('.container');

            preloader.style.display = 'none';
            container.style.display = 'block';
        }, 2000); // 2000 milisegundos = 2 segundos
    };

    const catalogo = document.getElementById('catalogo');
    const carritoLista = document.getElementById('carrito-lista');
    const carritoTotal = document.getElementById('carrito-total');
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    const confirmarCompraBtn = document.getElementById('confirmar-compra');
    const cancelarCompraBtn = document.getElementById('cancelar-compra');
    let total = 0;
    let carrito = {};

    const productos = [
        {
            nombre: 'Café Americano',
            precio: 2.5,
            descripcion: 'Café negro de granos seleccionados.',
            imagen:'../../img/cafeteria/ico1.gif'
        },
        {
            nombre: 'Latte',
            precio: 3.0,
            descripcion: 'Café con leche espumada.',
            imagen: '../../img/cafeteria/ico2.gif'
        },
        {
            nombre: 'Cappuccino',
            precio: 3.5,
            descripcion: 'Café con leche vaporizada y espuma.',
            imagen: '../../img/cafeteria/ico3.gif'
        },
        {
            nombre: 'Muffin de Chocolate',
            precio: 2.0,
            descripcion: 'Delicioso muffin de chocolate.',
            imagen: '../../img/cafeteria/ico4.gif'
        },
        {
            nombre: 'Croissant',
            precio: 1.5,
            descripcion: 'Croissant recién horneado.',
            imagen: '../../img/cafeteria/ico5.gif'
        }
    ];

    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');

        productoDiv.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
            <p class="precio">$${producto.precio.toFixed(2)}</p>
            <button>Añadir al Carrito</button>
            <div class="contador" id="contador-${producto.nombre}">0</div>
        `;

        const boton = productoDiv.querySelector('button');
        boton.addEventListener('click', () => {
            añadirAlCarrito(producto);
        });

        catalogo.appendChild(productoDiv);
    });

    function añadirAlCarrito(producto) {
        if (carrito[producto.nombre]) {
            carrito[producto.nombre].cantidad += 1;
        } else {
            carrito[producto.nombre] = {
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: 1
            };
        }
        actualizarContador(producto.nombre);
        actualizarCarrito();
    }

    function actualizarContador(nombreProducto) {
        const contador = document.getElementById(`contador-${nombreProducto}`);
        contador.textContent = carrito[nombreProducto].cantidad;
        contador.classList.add('visible');
    }

    function actualizarCarrito() {
        carritoLista.innerHTML = '';
        total = 0;

        Object.values(carrito).forEach(item => {
            const itemElement = document.createElement('li');
            itemElement.textContent = `${item.nombre} x ${item.cantidad} - $${(item.precio * item.cantidad).toFixed(2)}`;

            const eliminarBtn = document.createElement('button');
            eliminarBtn.textContent = 'Eliminar';
            eliminarBtn.classList.add('eliminar');
            eliminarBtn.addEventListener('click', () => {
                eliminarDelCarrito(item.nombre);
            });

            itemElement.appendChild(eliminarBtn);
            carritoLista.appendChild(itemElement);

            total += item.precio * item.cantidad;
        });

        const impuesto = total * 0.15;
        const totalConImpuesto = total + impuesto;

        const impuestoElement = document.createElement('li');
        impuestoElement.textContent = `Impuesto (15%): $${impuesto.toFixed(2)}`;
        carritoLista.appendChild(impuestoElement);

        const totalElement = document.createElement('li');
        totalElement.innerHTML = `<strong>Total: $${totalConImpuesto.toFixed(2)}</strong>`;
        carritoLista.appendChild(totalElement);

        carritoTotal.textContent = totalConImpuesto.toFixed(2);
    }

    function eliminarDelCarrito(nombreProducto) {
        delete carrito[nombreProducto];
        actualizarCarrito();
        actualizarContador(nombreProducto);
    }

    document.getElementById('finalizar-compra').addEventListener('click', () => {
        if (total > 0) {
            const impuesto = total * 0.15;
            const totalConImpuesto = total + impuesto;
            modalMessage.textContent = `El total de tu compra es $${totalConImpuesto.toFixed(2)} (incluye un 15% de impuestos). ¡Gracias por tu preferencia!`;
            modal.style.display = 'flex';
        } else {
            alert('Tu carrito está vacío.');
        }
    });

    confirmarCompraBtn.addEventListener('click', () => {
        const impuesto = total * 0.15;
        const totalConImpuesto = total + impuesto;
        alert(`Compra confirmada. Total pagado: $${totalConImpuesto.toFixed(2)}`);
        carrito = {};
        actualizarCarrito();
        resetearContadores();
        modal.style.display = 'none';
    });

    cancelarCompraBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    function resetearContadores() {
        document.querySelectorAll('.contador').forEach(contador => {
            contador.textContent = '0';
            contador.classList.remove('visible');
        });
    }
});
