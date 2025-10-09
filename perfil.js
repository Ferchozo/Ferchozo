document.addEventListener('DOMContentLoaded', function() {
    // 1. Lista de rutas de tus fotos de perfil
    const fotosDePerfil = [
        'img/fer2.png',
        'img/fer3.png', // Tu foto original también puede ser parte de la rotación
        'img/fer4.png',
        // ¡Añade aquí todas las rutas a tus fotos de perfil que quieres que roten!
    ];

    // 2. Selecciona una ruta aleatoria de la lista
    const randomIndex = Math.floor(Math.random() * fotosDePerfil.length);
    const selectedPhoto = fotosDePerfil[randomIndex];

    // 3. Encuentra la etiqueta <img> de tu foto de perfil usando el ID
    const fotoPerfilElement = document.getElementById('foto-perfil-aleatoria');

    // 4. Cambia el atributo 'src' de la imagen por la foto seleccionada aleatoriamente
    if (fotoPerfilElement) { // Esto verifica que el elemento exista antes de intentar cambiarlo
        fotoPerfilElement.src = selectedPhoto;
        // Opcional: También podrías querer actualizar el 'alt' text si cada foto tiene una descripción diferente
        // fotoPerfilElement.alt = "Nueva imagen de perfil de Fernando Hidalgo"; 
    }

    // --- Opcional: Si quieres que el favicon (el iconito de la pestaña) también cambie ---
    // 1. Encuentra el elemento link para el favicon o crea uno si no existe
   
   // let faviconElement = document.querySelector('link[rel="icon"]');
   // if (!faviconElement) {
   //     faviconElement = document.createElement('link');
   //     faviconElement.rel = 'icon';
   //     document.head.appendChild(faviconElement);
  //}

    // 2. Asigna la ruta de la foto seleccionada al favicon
    //    Asegúrate de que tus fotos de perfil sean adecuadas como favicons (pequeñas y claras).
    //    Si son fotos de cuerpo completo, quizás no se vean bien como favicon.
    //    Podrías tener una lista de favicons específicos si tus fotos son muy grandes.
    faviconElement.href = selectedPhoto;
});