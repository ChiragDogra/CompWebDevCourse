
let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence(){
    let randomNumber = Math.floor(Math.random()*4);
    return randomNumber;
}

let randomChosenColor = buttonColors[nextSequence()];

gamePattern.push(randomChosenColor);

let randomId = "#" + randomChosenColor;

$(randomId).click(()=>{
    $(randomId).addClass("pressed");
    setTimeout(()=>{
        $(randomId).removeClass("pressed");
    })
});