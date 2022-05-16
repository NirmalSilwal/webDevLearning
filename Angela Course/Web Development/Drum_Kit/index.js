// document.querySelector("button").addEventListener("click", function () {
//     alert("I got clicked!");
// });

// adding listener to all buttons rather than first button only
const allbuttons = document.querySelectorAll(".drum");

// var allsounds = ["sounds/crash.mp3", "sounds/kick-bass.mp3", "sounds/snare.mp3", "sounds/tom-1.mp3",
//     "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3"];

// for (let i = 0; i < allsounds.length; i++) {
//     console.log(allsounds[i]);
// }
// new Audio("sounds/tom-1.mp3" ).play();


// adding mouse click events
for (var i = 0; i < allbuttons.length; i++) {

    allbuttons[i].addEventListener("click", function () {

        let currentBtnPressed = this.innerHTML;

        this.style.color = "Green"; // for pressed button change color

        if (currentBtnPressed == "w")
            new Audio("sounds/crash.mp3").play();
        else if (currentBtnPressed == 'a')
            new Audio("sounds/kick-bass.mp3").play();
        else if (currentBtnPressed == 's')
            new Audio("sounds/snare.mp3").play();
        else if (currentBtnPressed == 'd')
            new Audio("sounds/tom-1.mp3").play();
        else if (currentBtnPressed == 'j')
            new Audio("sounds/tom-2.mp3").play();
        else if (currentBtnPressed == 'k')
            new Audio("sounds/tom-3.mp3").play();
        else if (currentBtnPressed == 'l')
            new Audio("sounds/tom-4.mp3").play();

        // can write above code cleanly with swith statements  

        // adding animation
        buttonAnimation(currentBtnPressed);
    });
}

// adding keyboard pressed events
// note - all switch and above if else if can be put into seperate function and make it modular
 
document.addEventListener("keydown", function (event) {
    let buttonTyped = event.key;

    switch (buttonTyped) {
        case 'w':
            new Audio("sounds/crash.mp3").play();
            break;
        case 'a':
            new Audio("sounds/kick-bass.mp3").play();
            break;
        case 's':
            new Audio("sounds/snare.mp3").play();
            break;
        case 'd':
            new Audio("sounds/tom-1.mp3").play();
            break;
        case 'j':
            new Audio("sounds/tom-2.mp3").play();
            break;
        case 'k':
            new Audio("sounds/tom-3.mp3").play();
            break;
        case 'l':
            new Audio("sounds/tom-4.mp3").play();
            break;
        default:
            console.log(buttonTyped + " was typed from the keyboard!!");
    }
     // adding animation
     buttonAnimation(buttonTyped);
});

function buttonAnimation(currentKey){
     var activeButton = document.querySelector("." + currentKey);
     activeButton.classList.add("pressed");

     setTimeout(function(){
         activeButton.classList.remove("pressed");
     }, 100);
}