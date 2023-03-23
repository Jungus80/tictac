let turn = localStorage.getItem('color');
const squares = document.querySelectorAll('.grid-item');
const gameContainer = document.getElementById('game_container');
const winnerSpan = document.getElementById('winner');
let count = 0;
let arrayG = [];
let arrayR = [];

// Cambio de color y cordenadas de cada color
function handleClick(event) {
    const { target } = event; // DESTRUCTURATION

    if (target.style.backgroundColor) { 
        return;
    }

    target.style.backgroundColor = turn;
    turn = turn === 'green' ? 'red' : 'green' // recursive  condicional
    count++;

    if (turn !== 'green') {
        arrayG.push(Number(target.dataset.value)); // get acces to dom data
    } else {
        arrayR.push(Number(target.dataset.value));
    }

    winner(arrayR, arrayG);
    checkDraw();
    target.removeEventListener('click', handleClick);
}

squares.forEach(square => square.addEventListener('click', handleClick));

// Winning conditions
const solutions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Check the winner
function winner(value, value2) {
    for (let i = 0; i < solutions.length; i++) {
        const enter = solutions[i];
        const result = value.filter(search => enter.includes(search)).sort();
        if (result.length === 3) {
            gameContainer.style.display = 'none';
            winnerSpan.textContent = 'RED'
            return;
        }
    }

    for (let i = 0; i < solutions.length; i++) {
        const enter = solutions[i];
        const result = value2.filter(search => enter.includes(search)).sort();
        if (result.length === 3) {
            gameContainer.style.display = 'none';
            winnerSpan.textContent = 'GREEN'
            return;
        }
    }
}

// Check the draw case
function checkDraw() {
    if (count === 9) {
        gameContainer.style.display = 'none';
        winnerSpan.textContent = 'DRAW';
    }
}
