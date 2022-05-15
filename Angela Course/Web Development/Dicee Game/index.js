// for left image
let randomNumber1 = Math.floor((Math.random() * 6) + 1);

let newpath = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", newpath);

// for right image
let randomNumber2 = Math.floor((Math.random() * 6) + 1);

let newpath2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", newpath2);

// deciding winner of the game
let winner = 1,
    loser = 2;
let draw = -1;
let outputText = "";

if (randomNumber1 < randomNumber2) {
    winner = 2;
    loser = 1;
}
if (randomNumber1 == randomNumber2) {
    draw = 1;
}

if (draw == 1) {
    outputText = "Draw!";
} else {
    if (winner == 1)
        outputText = "🚩 Player " + winner + " Wins!";
    else
    outputText = "Player " + winner + " Wins! 🚩";
}
document.querySelector("h1").innerHTML = outputText;