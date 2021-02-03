var canvas;
var music;
var box;
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
    box=createSprite(950, 500,100,100);
    box.shapeColor = ("white");
    box.setVelocity(-5,5);

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites;
    box.bounceOff(topEdge);
    box.bounceOff(rightEdge);
    box.bounceOff(leftEdge);
    

    drawSprites();
    //add condition to check if box touching surface and make it change color
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = rgb(153,0,76);
     }
     if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = rgb(51,255,51);
     }
     if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = rgb(0,51,255);
     }  if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = rgb(204,102,0);
     }
}
