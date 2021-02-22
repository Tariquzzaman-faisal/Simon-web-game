var colors = ["red", "green", "blue", "yellow"];
var player = [];
var string = [];
var gamestart = false;
var stage = 1;
var taken = 0;
//Listerners
$(document).keypress(function(){
  if(!gamestart){
    gamestart = true;
    nextSequence();
    $("#level-title").text("level " + stage);
  }
});

$(".btn").click(function(){
  var id = $(this).attr("id");
  player.push(id);
  playSound(id);
  animate("#" + id);
  taken++;
  if(taken == stage){
    taken = 0;
    check();

  }
}); 

//functions
function nextSequence(){
  reset();
  for(var i = 0; i < stage; i++){
    var rnd = Math.floor(Math.random()*4);
    var color = colors[rnd];
    console.log(color);
    string.push(color);
    $("#" + color).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(color);
  }
 }

function playSound(id){
  var sfx = new Audio("sounds/" + id + ".mp3");
  sfx.play();
}

function animate(id){
  $(id).addClass("pressed");
  setTimeout(function(){
    $(id).removeClass("pressed");
  }, 100);
}

function check(){
  var valid = 1;
  for(var i = 0; i < string.length; i++){
    if(player[i] != string[i]) valid = 0;
  }
  if(valid){
    setTimeout(function(){
      nextSequence();
    }, 1000);
    stage = stage + 1;
    $("#level-title").text("level " + stage);
  }
  else{
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    reset();
    stage = 1;
  }
}

function reset(){
  string = [];
  player = [];
  gamestart = false;
}
