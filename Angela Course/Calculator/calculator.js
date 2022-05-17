const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// we want our app to use the body parser now
// urlencoded is the special mode of bodyparser that allows us to parse data from HTML form

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;

    res.send("The result of calculation is: " + result);
});

app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let bmi = weight / Math.pow(height, 2);

    res.send("<h2>Your Body mass index is " + bmi + "</h2>");
})

app.listen(3000, function () {
    console.log("server started on PORT 3000");
});