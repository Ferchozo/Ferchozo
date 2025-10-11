document.addEventListener('DOMContentLoaded', function() {
    const fotosDePerfil = [
        '/Recursos/img/fer2.png',
        '/Recursos/img/fer3.png', 
        '/Recursos/img/fer4.png',   
    ];
    const randomIndex = Math.floor(Math.random() * fotosDePerfil.length);
    const selectedPhoto = fotosDePerfil[randomIndex];
    const fotoPerfilElement = document.getElementById('foto-perfil-aleatoria');
    if (fotoPerfilElement) { 
        fotoPerfilElement.src = selectedPhoto;
    }
});