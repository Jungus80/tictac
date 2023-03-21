
let  turn  = localStorage.getItem('color');
// recorrwe
square = document.querySelectorAll('.grid-item')
game_contain = document.getElementById('game_container')
span = document.getElementById('winner')

var  arrayG = []
var arrayR = []

// cambio de color y cordenadas de cada color
function handeclick (event){
    if (event.target.style.backgroundColor !== 'green' && event.target.style.backgroundColor !== 'red') { // evita el cambio de color por click
        event.target.style.backgroundColor = turn;
        turn = turn === 'green' ? 'red' : 'green';
    }

    if (turn !== 'green') {
        valogreen = Math.floor(event.target.getAttribute('data-value'));
        arrayG.push(valogreen);
        arrayG.sort();

    } else {
        valorred = Math.floor(event.target.getAttribute('data-value'));
        arrayR.push(valorred);
        arrayG.sort()
    }
    winner(arrayR,arrayG)
}
square.forEach(valor=>valor.addEventListener('click',handeclick)) // forEach busca en lista de elementos

// winning conditions
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


// check the winner
function winner(value,value2){
    for(i=0;i<solutions.length;i++){
        enter=solutions[i]
        let  result = value.filter(search=>enter.includes(search)).sort()
        if(result.length===3){
            game_contain.style.display = 'none'
            span.textContent = 'RED'
        }
    }
    for(i=0;i<solutions.length;i++){
        enter=solutions[i]
        let  result = value2.filter(search=>enter.includes(search)).sort()
        if(result.length===3){
            game_contain.style.display = "none"
            span.textContent = 'GREEN'
        }
    }

}


