var canvas;
var music;
var box;
var ball;
var box2;
var box3;
var surface1;
var surface2;
var surface3;
var surface4;
var topEdge;
var leftEdge;
var rightEdge;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(990,600);

    //create 4 different surfaces
    surface1 = createSprite(100,590,250,30);
    surface1.shapeColor = ("red");
    surface2 = createSprite(355,590,250,30);
    surface2.shapeColor = ("green");
    surface3 = createSprite(610,590,250,30);
    surface3.shapeColor = ("blue");
    surface4 = createSprite(865,590,250,30);
    surface4.shapeColor = ("orange");

    topEdge = createSprite(498,2,990,1);
    rightEdge = createSprite(988,300,1,600);
    leftEdge = createSprite(2,275,1,600);
    //create box sprite and give velocity
    box=createSprite(950, 500,75,75);
    box.shapeColor = ("white");
    box.setVelocity(-12,12);

    ball=createSprite(40, 500,75,75);
    ball.shapeColor = ("red");
    ball.setVelocity(-5,5);

    box2=createSprite(950, 40,75,75);
    box2.shapeColor = ("white");
    box2.setVelocity(-8,8);

    box3=createSprite(40, 40,75,75);
    box3.shapeColor = ("white");
    box3.setVelocity(-10,10);


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites;
    box.bounceOff(topEdge);
    box.bounceOff(rightEdge);
    box.bounceOff(leftEdge);

    ball.bounceOff(topEdge);
    ball.bounceOff(rightEdge);
    ball.bounceOff(leftEdge);


    box2.bounceOff(topEdge);
    box2.bounceOff(rightEdge);
    box2.bounceOff(leftEdge);

    box.bounce(ball);

    box3.bounceOff(topEdge);
    box3.bounceOff(rightEdge);
    box3.bounceOff(leftEdge);

    box2.bounce(ball);
    box2.bounce(box);
    box2.bounce(box3);
    box3.bounce(box);
    box3.bounce(box2);
    box3.bounce(ball);   


    drawSprites();
    //add condition to check if box touching surface and make it change color
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = rgb(255,0,0);
     }
     if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = rgb(51,255,51);
     }
     if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = rgb(0,51,255);
     } 
      if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = rgb(204,102,0);
     }

     if(surface1.isTouching(ball) && ball.bounceOff(surface1)){
      ball.shapeColor = rgb(255,0,0);
   }
   if(surface2.isTouching(ball) && ball.bounceOff(surface2)){
      ball.shapeColor = rgb(51,255,51);
   }
   if(surface3.isTouching(ball) && ball.bounceOff(surface3)){
      ball.shapeColor = rgb(0,51,255);
   } 
    if(surface4.isTouching(ball) && ball.bounceOff(surface4)){
      ball.shapeColor = rgb(204,102,0);
   }

   if(surface1.isTouching(box2) && box2.bounceOff(surface1)){
      box2.shapeColor = rgb(255,0,0);
   }
   if(surface2.isTouching(box2) && box2.bounceOff(surface2)){
      box2.shapeColor = rgb(51,255,51);
   }
   if(surface3.isTouching(box2) && box2.bounceOff(surface3)){
      box2.shapeColor = rgb(0,51,255);
   } 
    if(surface4.isTouching(box2) && box2.bounceOff(surface4)){
      box2.shapeColor = rgb(204,102,0);
   }

   if(surface1.isTouching(box3) && box3.bounceOff(surface1)){
      box3.shapeColor = rgb(255,0,0);
   }
   if(surface2.isTouching(box3) && box3.bounceOff(surface2)){
      box3.shapeColor = rgb(51,255,51);
   }
   if(surface3.isTouching(box3) && box3.bounceOff(surface3)){
      box3.shapeColor = rgb(0,51,255);
   } 
    if(surface4.isTouching(box3) && box3.bounceOff(surface4)){
      box3.shapeColor = rgb(204,102,0);
   }
}
