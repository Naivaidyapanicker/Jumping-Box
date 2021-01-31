var canvas;
var music;
var box;
var surface1;
var surface2;
var surface3;
var surface4;

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
    //create box sprite and give velocity
    box = createSprite(random(20,550));
    box.setVelocity(5,-5);

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites()

    drawSprites();
    //add condition to check if box touching surface and make it box
}
