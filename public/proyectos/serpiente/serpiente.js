const gameContainer = document.getElementById('game-container');
const food = document.getElementById('food');

let snake = [{ x: 0, y: 0 }];
let foodX = Math.floor(Math.random() * 380);
let foodY = Math.floor(Math.random() * 380);
food.style.left = foodX + 'px';
food.style.top = foodY + 'px';

document.addEventListener('mousemove', (event) => {
    const rect = gameContainer.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const newX = Math.min(Math.max(0, mouseX - 10), 380);
    const newY = Math.min(Math.max(0, mouseY - 10), 380);

    const newHead = { x: newX, y: newY };
    snake.unshift(newHead); // Agrega la nueva cabeza al principio de la serpiente

    // Remueve el último segmento si no hay comida
    if (!checkCollision()) {
        snake.pop();
    }

    updateSnake();
});

function updateSnake() {
    // Elimina todos los segmentos de la serpiente del contenedor
    document.querySelectorAll('.snake-segment').forEach(segment => segment.remove());

    // Agrega los segmentos de la serpiente actualizados
    snake.forEach(segment => {
        const segmentElement = document.createElement('div');
        segmentElement.className = 'snake-segment';
        segmentElement.style.left = segment.x + 'px';
        segmentElement.style.top = segment.y + 'px';
        gameContainer.appendChild(segmentElement);
    });
}

function checkCollision() {
    const head = snake[0];

    // Verifica si la cabeza ha colisionado con la comida
    if (Math.abs(head.x - foodX) < 20 && Math.abs(head.y - foodY) < 20) {
        foodX = Math.floor(Math.random() * 380);
        foodY = Math.floor(Math.random() * 380);
        food.style.left = foodX + 'px';
        food.style.top = foodY + 'px';
        return true;
    }

    return false;
}

// Inicializa la serpiente en el contenedor del juego
updateSnake();
