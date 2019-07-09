console.log("loading script")
var turn = 0;
var count= 0;
var max = 30;
var countButton = document.getElementsByClassName("tracker")[0];
var displayCount = document.getElementById("counterDisplay");
var board = [
                  [1,0,0,0,0,0,0,1,0,0],
                  [1,0,0,0,0,0,0,1,0,0],
                  [1,0,0,0,0,0,0,1,0,0],
                  [1,0,0,0,0,0,0,1,0,0],
                  [1,0,0,0,0,0,0,0,0,0],
                  [0,0,1,1,1,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0],
                  [0,1,1,1,1,1,1,0,0,0],
                  [0,0,0,0,0,0,0,1,1,0],
                  [0,0,0,0,0,0,0,0,0,0]
                  ];

const boxes = document.querySelectorAll('.box');
startGame();

//counter
function countRounds() {
for (var i=0; i<boxes.length; i++) {
    boxes[i].addEventListener("click", function() {
        count++;
        displayCount.innerHTML = "Number of torpedoes used " +count + "/30";
    })
}}
countRounds();


//start game
function startGame() {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].innerText = '';
        boxes[i].style.removeProperty('background-color');
        boxes[i].addEventListener('click', fillClick,false); //click function
    }


}
//
function fillClick (event){
    var position = board[parseInt(event.target.getAttribute("data-row"))][parseInt(event.target.getAttribute("data-col"))];
    console.log(event.target)
    if (event.target.style.backgroundColor === "rgba(128, 128, 128, 0.7)" || event.target.style.backgroundColor === "rgba(128, 0, 0, 0.7)") {
        alert("Stop wasting your torpedoes! You already fired at this location.");
    } else if (position === 0) { //when user clicks on empty cell (missed)
        event.target.style.backgroundColor="rgba(128,128,128,0.7)";
    } else if (position === 1){ //when user click on occupied cell (hit)
        event.target.style.backgroundColor="rgba(128,0,0,0.7)";alert("You have hit a ship!");
    }
        turn++; //adds a turn every round
}

var restartButton = document.getElementById("reset");   restartButton.addEventListener("click",gameRestart);

//restart feature
function gameRestart() {
   startGame ();
}