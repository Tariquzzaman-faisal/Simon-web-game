//variables
var colors = ["red", "green", "blue", "yellow"];
var string = [];
var player = "nan";
//Game Started
var gamestart = false;

$(document).keypress(function(){
  if(!gamestart){
    pushSequence();
    gamestart = true;
    PlaySound(string[0]);
  }
})
//Push next Sequence
//PlaySound
function PlaySound(id){
  var sfx = new Audio("sounds/" + id + ".mp3");
  sfx.play();
  Animate("#" + id);
}
//Animate
function Animate(id){
  $(id).addClass("pressed");
  setTimeout(function(){
    $(id).removeClass("pressed");
  }, 100);
}
//Push Player Sequence
function pushSequence(){
  string.push(colors[Math.floor(Math.random()*4)]);
}
//Check result
//Gameover
