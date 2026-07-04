export interface Project {
  title: string;
  description: string;
  tech: string;
  image: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: 'Facturación Cafetería',
    description:
      'Catálogo de productos, carrito de compras y flujo de facturación para restaurantes y cafeterías.',
    tech: 'HTML, CSS, JavaScript',
    image: '/Recursos/img/cafeteria/port1.jpg',
    url: '/proyectos/cafeteria/app.html',
  },
  {
    title: 'Menú Digital (Tailwind)',
    description:
      'Versión moderna del sistema de cafetería con interfaz responsive y diseño con Tailwind CSS.',
    tech: 'HTML, Tailwind CSS, JavaScript',
    image: '/Recursos/img/cafeteria/port2.png',
    url: '/proyectos/cafeteria/Cafe.html',
  },
  {
    title: 'Plataforma de Facturación',
    description:
      'Generación de facturas con datos de cliente, productos dinámicos y cálculo automático de totales.',
    tech: 'HTML, Bootstrap, JavaScript',
    image: '/Recursos/img/mape.png',
    url: '/proyectos/facturacion-beta/index.html',
  },
  {
    title: 'Inventario con Escaneo',
    description:
      'Control de inventario con lectura de códigos de barras por cámara e importación/exportación Excel.',
    tech: 'Material Design Lite, QuaggaJS, XLSX',
    image: '/Recursos/img/skull.png',
    url: '/proyectos/Herramienta/Inventario.html',
  },
  {
    title: 'Carrera de Rentabilidad',
    description:
      'PWA que visualiza el rendimiento de vendedores a partir de archivos Excel de ventas diarias.',
    tech: 'PWA, Service Worker, SheetJS',
    image: '/proyectos/Renta/imgrenta/icon-512.png',
    url: '/proyectos/Renta/renta.html',
  },
  {
    title: 'Menú Cervezas Artesanales',
    description:
      'Catálogo interactivo de cervezas con información dinámica generada desde JavaScript.',
    tech: 'HTML, CSS, JavaScript',
    image: '/Recursos/img/cafeteria/cafe.gif',
    url: '/proyectos/Cerveza/cerveza.html',
  },
  {
    title: 'Snake Game',
    description: 'Implementación clásica del juego de la serpiente en JavaScript puro.',
    tech: 'HTML, CSS, JavaScript',
    image: '/Recursos/img/fh logo 1.png',
    url: '/proyectos/serpiente/serpiente.html',
  },
  {
    title: 'Gato Interactivo',
    description:
      'Animación CSS/JS de un gato cuyos ojos siguen el movimiento del cursor. Un homenaje a Cogollo.',
    tech: 'HTML, CSS, JavaScript',
    image: '/Recursos/img/fer3.png',
    url: '/gato.html',
  },
  {
    title: 'Festival Cordillera',
    description:
      'Landing con cuenta regresiva, playlist de Spotify e imágenes flotantes para el festival.',
    tech: 'HTML, CSS, JavaScript',
    image: '/Recursos/img/cordillera/image3.gif',
    url: '/cordillera.html',
  },
];
