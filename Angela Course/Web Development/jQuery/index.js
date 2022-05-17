// $(document).ready(function() {
//     $("h1").css("color","red");
//     console.log($("h1").css("font-size", "5rem"));
// });


$("h1").addClass("big-title");

console.log($("button"));
$("h1").removeClass("big-title");

 $("h1").addClass("big-title margin-50");

console.log($("h1").hasClass("margin-50"));

$("h1").text("Boo!!")

$("button").text("Don't click me!")

$("button").click(function(){
    console.log("i am clicked");
    $("h1").css("color","green"); 
})

$("h1").on("mouseover",function(){
    $("h1").css("color","purple");
})