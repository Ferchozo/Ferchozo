// Seleccionar elementos del DOM
const clienteForm = document.getElementById('cliente-form');
const productoForm = document.getElementById('producto-form');
const productosTableBody = document.querySelector('#productos-table tbody');
const totalGlobal = document.getElementById('total-global');
const btnGenerarFactura = document.getElementById('btn-generar-factura');

// Arreglo para almacenar los productos agregados
let productos = [];

/**
 * Función para renderizar la tabla de productos.
 */
function renderProductos() {
  // Limpiar el tbody
  productosTableBody.innerHTML = '';

  // Variable para sumar el total
  let total = 0;

  // Recorrer los productos y generar filas
  productos.forEach((item, index) => {
    const subtotal = (item.cantidad * item.precio).toFixed(2);
    total += parseFloat(subtotal);

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.nombre}</td>
      <td>${item.cantidad}</td>
      <td>$${item.precio.toFixed(2)}</td>
      <td>$${subtotal}</td>
      <td>
        <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${index})">
          Eliminar
        </button>
      </td>
    `;
    productosTableBody.appendChild(row);
  });

  // Actualizar el total global en la interfaz
  totalGlobal.textContent = total.toFixed(2);
}

/**
 * Función para eliminar un producto de la lista.
 */
function eliminarProducto(index) {
  productos.splice(index, 1);
  renderProductos();
}

/**
 * Maneja el evento de "submit" en el formulario de producto.
 */
productoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Tomar valores del formulario
  const nombre = document.getElementById('producto-nombre').value.trim();
  const cantidad = parseInt(document.getElementById('producto-cantidad').value);
  const precio = parseFloat(document.getElementById('producto-precio').value);

  if (!nombre || cantidad <= 0 || precio <= 0) {
    alert('Por favor, ingresa datos válidos.');
    return;
  }

  // Crear objeto producto
  const nuevoProducto = {
    nombre,
    cantidad,
    precio
  };

  // Agregarlo a la lista y renderizar
  productos.push(nuevoProducto);
  renderProductos();

  // Limpiar formulario
  productoForm.reset();
});

/**
 * Manejador para generar la factura.
 * Aquí podrías guardar los datos en la BD, generar un PDF, etc.
 */
btnGenerarFactura.addEventListener('click', () => {
  // Obtener los datos del cliente
  const clienteNombre = document.getElementById('cliente-nombre').value.trim();
  const clienteRFC = document.getElementById('cliente-rfc').value.trim();
  const clienteDireccion = document.getElementById('cliente-direccion').value.trim();

  if (!clienteNombre || !clienteRFC || !clienteDireccion) {
    alert('Por favor, completa los datos del cliente antes de generar la factura.');
    return;
  }

  if (productos.length === 0) {
    alert('No hay productos agregados a la factura.');
    return;
  }

  // Lógica para “generar factura”.
  // Podrías imprimir la página, abrir un modal con vista previa, enviar datos a un backend, etc.
  alert('¡Factura generada correctamente!');

  // Aquí podrías hacer algo como:
  // - Enviar datos a un servidor usando fetch o axios
  // - Generar un PDF con librerías como jsPDF
  // - Limpiar la lista de productos
});

