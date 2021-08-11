var bg,bath,sleep,brush,gym,eat,drink,move;
var astrounaut;


function preload(){
  bg = loadImage("iss.png");
  bath = loadAnimation("bath1.png","bath2.png");
  sleep = loadAnimation("sleep.png")
  brush = loadAnimation("brush.png")
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  move = loadAnimation("move.png","move1.png");
}

function setup() {
 createCanvas(600,500);

  astrounaut = createSprite(300,230);
  astrounaut.addAnimation("sleeping",sleep);
  astrounaut.scale = 0.1;

  
}

function draw() {
  background(bg);

  drawSprites();

  textSize(20); 
  fill("white") 
  text("Instructions:",20, 35); 
  textSize(15); 
  text("Up Arrow = Brushing",20, 55); 
  text("Down Arrow = Gymming",20, 70); 
  text("Left Arrow = Eating",20, 85); 
  text("Right Arrow = Bathing",20, 100); 
  text("m key = Moving",20, 115); 

  edges=createEdgeSprites(); 
  astrounaut.bounceOff(edges);
  

  if (keyDown("UP_ARROW")){
    astrounaut.addAnimation("brushing",brush);
    astrounaut.changeAnimation("brushing")
    astrounaut.y = 350;
    astrounaut.velocityX = 0;
    astrounaut.velocityY = 0;
  }

  if (keyDown("DOWN_ARROW")){
    astrounaut.addAnimation("gymming",gym);
    astrounaut.changeAnimation("gymming")
    astrounaut.y = 350;
    astrounaut.velocityX = 0;
    astrounaut.velocityY = 0;
  }

  if (keyDown("LEFT_ARROW")){
    astrounaut.addAnimation("eating",eat);
    astrounaut.changeAnimation("eating")
    astrounaut.x = 150;
    astrounaut.y = 350;
    astrounaut.velocityX = 0.5;
    astrounaut.velocityY = 0.5;
  }

  if (keyDown("RIGHT_ARROW")){
    astrounaut.addAnimation("bathing",bath);
    astrounaut.changeAnimation("bathing")
    astrounaut.x = 300;
    astrounaut.velocityX = 0;
    astrounaut.velocityY = 0;
  }

  if (keyDown("m")){
    astrounaut.addAnimation("moving",move);
    astrounaut.changeAnimation("moving")
    astrounaut.velocityX = 1;
    astrounaut.velocityY = 1;
  }



  
}