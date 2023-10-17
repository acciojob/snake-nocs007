const gameContainer = document.getElementById("gameContainer");
const scoreElement = document.getElementById("score");

let snake = [{ x: 20, y: 1 }];  // Updated starting position
let food = { x: getRandomPosition(), y: getRandomPosition() };
let direction = "right";
let score = 0;

function getRandomPosition() {
    return Math.floor(Math.random() * 40);
}

function createPixel(x, y, className) {
    const pixel = document.createElement("div");
    pixel.className = className;
    pixel.id = `pixel${x}-${y}`;
    pixel.style.gridColumn = y + 1;
    pixel.style.gridRow = x + 1;
    gameContainer.appendChild(pixel);
}

function updateGame() {
    const head = Object.assign({}, snake[0]);

    switch (direction) {
        case "right":
            head.y += 1;
            break;
        // Handle other directions: up, down, and left
        // ...

    }

    // Check for collisions with food
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        scoreElement.textContent = score;

        // Generate new food
        food = { x: getRandomPosition(), y: getRandomPosition() };
        createPixel(food.x, food.y, "food"); // Create the new food pixel
    } else {
        // Remove the last segment of the snake
        const tail = snake.pop();
        const tailPixel = document.getElementById(`pixel${tail.x}-${tail.y}`);
        tailPixel.classList.remove("snakeBodyPixel");
    }

    // Check for collisions with the wall or itself
    // ...

    snake.unshift(head);
    const headPixel = document.getElementById(`pixel${head.x}-${head.y}`);
    headPixel.classList.add("snakeBodyPixel");
}

function startGame() {
    createPixel(food.x, food.y, "food");
    createPixel(snake[0].x, snake[0].y, "snakeBodyPixel");
    setInterval(updateGame, 100);
}

document.addEventListener("keydown", (event) => {
    // Handle arrow key presses to change the direction
    // ...

});

startGame();
