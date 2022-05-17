const { response } = require("express");
const express = require("express");
const app = express();
 
// this method defines what should happen when someone makes a get request to the home root
app.get("/", function(request, response){
    response.send("<h1>hello express!!.... testing nodemon</h1>");
});

app.get("/contact", function(req, res){
    res.send("<h2>contact me at: nirmal@gmail.com</h2>");
});

app.get("/about", function(req, res) {
    res.send("<h3>Hello my name is Nirmal Silwal. I am currently pursuing MS in CS from MIU at Fairfield.</h3>")
});

app.get("/hobbies", function(req, res){
    res.send("I love reading and listening audiobooks. I also like travelling, watching movies...")
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});