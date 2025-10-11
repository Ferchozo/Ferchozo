document.addEventListener('mousemove', (event) => {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
        const pupil = eye.querySelector('.pupil');
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const angle = Math.atan2(event.pageX - eyeX, event.pageY - eyeY);
        const x = Math.sin(angle) * 10;
        const y = Math.cos(angle) * 10;
        pupil.style.transform = `translate(${x}px, ${y}px)`;
    });
});
