document.addEventListener("DOMContentLoaded", function() {
    let products = [];         // Arreglo con los productos cargados desde Excel
    let scannerRunning = false; // Estado del escáner (activo/inactivo)
  
    // Referencias a elementos del DOM
    const xlsFileInput = document.getElementById("xlsFileInput");
    const productsTableBody = document.querySelector("#productsTable tbody");
    const startScannerBtn = document.getElementById("startScannerBtn");
    const nombreProductoInput = document.getElementById("nombreProductoInput");
    const buscarPorNombreBtn = document.getElementById("buscarPorNombreBtn");
  
    /*
     * 1) LECTURA DE ARCHIVO XLS/XLSX
     * --------------------------------------------------------------------
     */
    xlsFileInput.addEventListener("change", function(e) {
      const file = e.target.files[0];
      if (!file) return;
  
      const reader = new FileReader();
      reader.onload = function(event) {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: "array" });
  
        // Tomamos la primera hoja
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
  
        // Convertimos la hoja a array de arrays, asumiendo fila 0 como encabezado
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        const headers = jsonData[0]; // La primera fila
  
        // Identificamos las columnas
        const colCodigo = headers.indexOf("Código de barras");
        const colNombre = headers.indexOf("Nombre");
        const colCantSis = headers.indexOf("Cantidad Sistema");
  
        products = [];
        // Recorremos las filas (empezando en la 1)
        for (let i = 1; i < jsonData.length; i++) {
          const row = jsonData[i];
          if (!row || row.length === 0) continue;
  
          const codigo = row[colCodigo] || "";
          const nombre = row[colNombre] || "";
          const cantSis = row[colCantSis] || 0;
  
          products.push({
            codigo: String(codigo).trim(),
            nombre: String(nombre).trim(),
            cantidadSistema: parseInt(cantSis, 10) || 0,
            cantidadFisica: 0,
            observaciones: ""
          });
        }
  
        renderTable();
      };
      reader.readAsArrayBuffer(file);
    });
  
    /*
     * 2) RENDERIZAR LA TABLA
     * --------------------------------------------------------------------
     * Muestra únicamente los productos que no han sido descartados
     * (porque no coinciden en cantidad).
     */
    function renderTable() {
      productsTableBody.innerHTML = "";
  
      products.forEach((prod, index) => {
        const row = document.createElement("tr");
  
        // 2.1) Celdas
        // Código de barras
        const tdCodigo = document.createElement("td");
        tdCodigo.textContent = prod.codigo;
        row.appendChild(tdCodigo);
  
        // Nombre
        const tdNombre = document.createElement("td");
        tdNombre.textContent = prod.nombre;
        row.appendChild(tdNombre);
  
        // Cant. Sistema
        const tdCantSis = document.createElement("td");
        tdCantSis.textContent = prod.cantidadSistema;
        row.appendChild(tdCantSis);
  
        // Cant. Física (input)
        const tdCantFisica = document.createElement("td");
        const inputFisica = document.createElement("input");
        inputFisica.type = "number";
        inputFisica.value = prod.cantidadFisica;
        inputFisica.addEventListener("change", () => {
          // Actualizamos la cantidad física
          prod.cantidadFisica = parseInt(inputFisica.value, 10) || 0;
          // Si coincide con la cantidad del sistema, se descarta
          if (prod.cantidadFisica === prod.cantidadSistema) {
            // Removemos el producto del array
            products.splice(index, 1);
            renderTable();
          }
        });
        tdCantFisica.appendChild(inputFisica);
        row.appendChild(tdCantFisica);
  
        // Observaciones (input)
        const tdObserv = document.createElement("td");
        const inputObs = document.createElement("input");
        inputObs.type = "text";
        inputObs.value = prod.observaciones;
        inputObs.addEventListener("change", () => {
          prod.observaciones = inputObs.value;
        });
        tdObserv.appendChild(inputObs);
        row.appendChild(tdObserv);
  
        // 2.2) Agregamos la fila a la tabla
        productsTableBody.appendChild(row);
      });
    }
  
    /*
     * 3) ESCÁNER DE CÓDIGO DE BARRAS (QuaggaJS)
     * --------------------------------------------------------------------
     */
    startScannerBtn.addEventListener("click", () => {
      if (!scannerRunning) {
        startScanner();
      } else {
        stopScanner();
      }
    });
  
    function startScanner() {
      Quagga.init(
        {
          inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector('#interactive')
          },
          decoder: {
            // Ajusta los formatos de códigos de barras que utilices
            readers: ["code_128_reader", "ean_reader", "upc_reader", "ean_13_reader"]
          }
        },
        function(err) {
          if (err) {
            console.log(err);
            alert("Error al iniciar escáner: " + err);
            return;
          }
          Quagga.start();
          scannerRunning = true;
          startScannerBtn.textContent = "Detener Escaneo";
        }
      );
  
      // Cuando se detecta un código, simplemente resalta el producto (si existe)
      Quagga.onDetected((data) => {
        const code = data.codeResult.code;
        console.log("Código detectado:", code);
  
        // Buscamos el producto correspondiente
        const foundIndex = products.findIndex(
          p => p.codigo.trim() === code.trim()
        );
  
        if (foundIndex !== -1) {
          // Resaltamos la fila por un momento (scrollIntoView + animación)
          highlightProductRow(foundIndex);
        } else {
          alert("Producto no encontrado en la lista.");
        }
      });
    }
  
    function stopScanner() {
      Quagga.stop();
      scannerRunning = false;
      startScannerBtn.textContent = "Iniciar Escaneo";
    }
  
    /*
     * Función para resaltar la fila del producto encontrado
     */
    function highlightProductRow(index) {
      // Buscamos la fila dentro de la tabla
      const row = productsTableBody.children[index];
      if (!row) return;
  
      row.scrollIntoView({ behavior: "smooth", block: "center" });
      row.classList.add("highlight");
      // Quitamos la clase highlight después de 1.5s (efecto visual)
      setTimeout(() => row.classList.remove("highlight"), 1500);
    }
  
    /*
     * 4) BÚSQUEDA POR NOMBRE
     * --------------------------------------------------------------------
     * El usuario ingresa un nombre, se busca y se resalta la primera coincidencia.
     */
    buscarPorNombreBtn.addEventListener("click", () => {
      const nombreBuscado = nombreProductoInput.value.trim().toLowerCase();
      if (!nombreBuscado) {
        alert("Ingresa un nombre de producto para buscar.");
        return;
      }
  
      const foundIndex = products.findIndex(
        p => p.nombre.toLowerCase().includes(nombreBuscado)
      );
  
      if (foundIndex !== -1) {
        highlightProductRow(foundIndex);
      } else {
        alert("No se encontró un producto que coincida con ese nombre.");
      }
    });
  });
  