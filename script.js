const dino = document.getElementById ('dino');
const cactus = document.getElementById ('cactus');
const gameWindow = document.querySelector ('.game');
const gameOverPerent = document.querySelector ('.gameOver');
const refreshBtn = document.querySelector ('.refresh');



document.addEventListener ('keydown',function(event) {
    jump();
    console.log('score');
});

function refreshPage(){
    window.location.reload();
} 

function jump () {
    if (dino.classList != 'jump') {
        dino.classList.add('jump');
    }
    setTimeout(function(){
        dino.classList.remove('jump'); 
    }, 300);
}

function gameOver () {
    gameWindow.classList.add('hide');
    gameWindow.classList.remove('show');
    refreshBtn.classList.add('button');
    refreshBtn.classList.remove('hide');

    gameOverPerent.innerHTML = `
    <img src="img/SeekPng.com_game-over-png_2391119.png" alt="game over" class="img">
    `;
}

let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus ).getPropertyValue('left'));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        console.log('Game over');
        gameOver();
    }
}, 10);