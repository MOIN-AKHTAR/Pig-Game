let Score = [0, 0];
let player = 1;
let currentScore = 0;
let gamePlaying = false;
const dice1 = document.getElementById("dice_1");
const rollBtn = document.querySelector(".roll_btn");
const changePlayer = document.querySelector(".hold_btn");
const pannel1 = document.querySelector(".pannel-1");
const pannel2 = document.querySelector(".pannel-2");
const currentScore_1 = document.getElementById("currentScore_1");
const currentScore_2 = document.getElementById("currentScore_2");
const newGameBtn = document.querySelector(".btn-new");
const player1Score = document.querySelector(".player1Score");
const player2Score = document.querySelector(".player2Score");
const player1Name = document.querySelector(".player1_name")
const player2Name = document.querySelector(".player2_name")

// [[Functions]]
const init = () => {
    Score = [0, 0];
    player = 1;
    gamePlaying = true;
    currentScore = 0;
    currentScore_1.innerHTML = 0;
    currentScore_2.innerHTML = 0;
    player1Score.innerHTML = 0;
    player2Score.innerHTML = 0;
    pannel1.classList.add("active");
    pannel2.classList.remove("active");
    dice1.src = `dice-1.png`;
}
init();
// Start New Game
newGameBtn.addEventListener("click", init)
// Const Change Active Player Circle
const changeActiveCirclePosition = () => {
    if (player === 1) {
        pannel1.classList.add("active");
        pannel2.classList.remove("active");
    } else {
        pannel2.classList.add("active");
        pannel1.classList.remove("active");
    }
}
// Check If Game Need To End
const endGame = function () {
    if (Score[0] >= 100 || Score[1] >= 100) {
        gamePlaying = false;
        if (Score[0] >= 100) {
            player1Name.textContent = "Winner";
            player1Name.classList.add("winner");
        } else if (Score[1] >= 100) {
            player2Name.textContent = "Winner";
            player2Name.classList.add("winner");
        }
    }
}
// Roll Dice Function Will Execute WhenEver Roll Dice Button Will Be Clicked-
const rollDice = function () {
    if (gamePlaying) {
        const dice1Random = Math.floor(Math.random() * 6 + 1);
        dice1.src = `dice-${dice1Random}.png`;
        currentScore += dice1Random;
        if (dice1Random === 1) {
            nextPlayer();
        } else {
            if (player === 1) {
                currentScore_1.innerHTML = currentScore;
                Score[0] += dice1Random;
                player1Score.innerHTML = Score[0];
                endGame();
            } else {
                currentScore_2.innerHTML = currentScore;
                Score[1] += dice1Random;
                player2Score.innerHTML = Score[1];
                endGame();
            }
        }
    }
}
// Toggle Player
const nextPlayer = () => {
    player = player === 1 ? 2 : 1;
    currentScore_1.innerHTML = 0;
    currentScore_2.innerHTML = 0
    currentScore = 0;
    changeActiveCirclePosition()
}
// =====================================================================================================
// [[Events]]
// Roll Dice
rollBtn.addEventListener("click", rollDice);
// Change Player
changePlayer.addEventListener("click", nextPlayer);


