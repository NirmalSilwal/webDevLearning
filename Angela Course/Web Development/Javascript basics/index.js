// alert('hello');
// alert('world');

var yourname = prompt("what is your name");
alert(`welcome to Javascript ${yourname} !!!`);

alert(prompt('enter your tweet').slice(0, 140))

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0)
        console.log("Fizz Buzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}