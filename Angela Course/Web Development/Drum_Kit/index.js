// document.querySelector("button").addEventListener("click", function () {
//     alert("I got clicked!");
// });

// adding listener to all buttons rather than first button only
const allbuttons = document.querySelectorAll("button");
for (var i = 0; i < allbuttons.length; i++) {
    allbuttons[i].addEventListener("click", function () {
        alert("I got clicked!");
    });
}