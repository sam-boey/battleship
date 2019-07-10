console.log("loading script")
var turn = 0;
var count = 0;
var targets = 20;
var displayTarget = document.getElementById("targetsDisplay");
var displayCount = document.getElementById("counterDisplay");
var miss = new Audio('sounds/miss.mp3');
var explosion = new Audio('sounds/explosion.mp3');
var randomNum = null;
var playingBoard = null;
console.log(playingBoard)
var board = [
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var board1 = [
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var board2 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 1, 1, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
];

var board3 = [
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
];

var board4 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1]
];

var boardArr = [board, board1, board2, board3, board4]

const boxes = document.querySelectorAll('.box');
startGame();

//counter
function countRounds() {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", function() {
            count++;
            displayCount.innerHTML = "Number of torpedoes used : " + count + "/35";
            if (count === 35) {
                alert("You ran out of torpedoes! You lost!");
                gameRestart();
            }
        })
    }

}
countRounds();


//start game
function startGame() {
    randomNum = Math.floor(Math.random() * 5);
    playingBoard = boardArr[randomNum];
    console.log(playingBoard);

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].innerText = '';
        boxes[i].style.removeProperty('background-color');
        boxes[i].addEventListener('click', fillClick, false); //click function
    };
    count = 0;
    displayCount.innerHTML = "Number of torpedoes used : " + count + "/35";
    targets = 20;
    displayTarget.innerHTML = "Targets remaining : " + targets + "/20";
}

//fire target
function fillClick(event) {
    var position = playingBoard[parseInt(event.target.getAttribute("data-row"))][parseInt(event.target.getAttribute("data-col"))];
    console.log(event.target)
    if (event.target.style.backgroundColor === "rgba(128, 128, 128, 0.7)" || event.target.style.backgroundColor === "rgba(128, 0, 0, 0.7)") {
        alert("Stop wasting your torpedoes! You already fired at this location.");
    } else if (position === 0) { //when user clicks on empty cell (missed)
        miss.play();
        event.target.style.backgroundColor = "rgba(128,128,128,0.7)";
        displayTarget.innerHTML = "Targets remaining : " + targets + "/20";
    } else if (position === 1) { //when user click on occupied cell (hit)
        explosion.play();
        event.target.style.backgroundColor = "rgba(128,0,0,0.7)";
        targets--;
        displayTarget.innerHTML = "Targets remaining : " + targets + "/20";
        alert("You have hit a ship!");
        if (targets === 0) {
            alert("All the enemy ships have been sunk! You are victorious!");
            gameRestart();
        }
    }
    turn++; //adds a turn every round
}


//restart feature
function gameRestart() {
    startGame();
}