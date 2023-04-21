//This is the method to make sure that our jquery is loaded before we try to access it
$(document).ready(()=>{
    //Whatever you want to do
})

$("h1").css("color"); //if this has only one argument then we're getting the value
// $("h1").css("color", "red"); // if it has 2 values then we're setting the value

$("button") //Selects all the buttons


$("h1").addClass("big-title")

// $("h1").removeClass("big-title")

$("h1").hasClass("big-title");


//Manipulating HTML and text
$("h1").text("Bye")

$("button").text("Don't click me")
$("button").html("<em>Please click me</em>")



//Manipulating attributes
console.log($("a").attr("href"))
$("a").attr("href", "https://chiragdogra.com")


//Adding event listeners to the elements
$("h1").click(()=>{
    $("h1").css("color", "purple")
})

$("button").click(()=>{
    $("h1").css("color", "purple");
})


$(document).keypress((e)=>{
    $("h1").text(e.key)
})


// Adding and removeing elements using jquery

$("h1").before("<button>New</button>") //adding a button before h1
// we also have after(), prepend(), append() methods, the difference between before and prepend is:
// that before will put the button before the opening tag of the element
// prepend will put it inside the element just before the content of the element




// Animation using jQuery

// $("button").click(()=>{
//     $("h1").fadeToggle();  // we also have fadein fadeout
// })


$("button").click(()=>{
    $("h1").slideToggle();  // we also have fadein fadeout
})
$("button").click(()=>{
    // $("h1").animate({css inside});  // we also have fadein fadeout
})