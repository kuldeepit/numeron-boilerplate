const playAgainBtn = document.getElementById("play-again-button");
const scoreBoard = document.getElementById("score-board");

if (playAgainBtn)
  playAgainBtn.onclick = function () {
    window.location.href = "./index.html";
  };

// Iteration 5: Store the player score and display it on the game over screen
if (scoreBoard) scoreBoard.innerText = localStorage.getItem("score");