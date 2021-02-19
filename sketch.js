var canvas;
var music;

var redSurface, blueSurface, greenSurface, yellowSurface;
var box,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    redSurface = createSprite(90, 585, 180, 15);
    redSurface.shapeColor = "red";
    blueSurface = createSprite(295, 585, 180, 15);
    blueSurface.shapeColor = "blue";
    greenSurface = createSprite(500, 585, 180, 15);
    greenSurface.shapeColor = "green";
    yellowSurface = createSprite(705, 585, 180, 15);
    yellowSurface.shapeColor = "yellow";

    box = createSprite(random(1, 800), random(1, 600), 20, 20);
    box.shapeColor = "black";
    box.velocityX = 2;
    box.velocityY = 4;

    
}

function draw() {
    background(rgb(169,169,169));
    drawSprites();

    edges = createEdgeSprites();

    box.bounceOff(edges);
    
    if (box.isTouching(redSurface)&&box.bounceOff(redSurface)) {
        box.shapeColor = "red";
    } else if (box.isTouching(blueSurface)&&box.bounceOff(blueSurface)) {
        box.shapeColor = "blue";
    } else if (box.isTouching(greenSurface)) {
        box.shapeColor = "green";
        box.velocityX = 0;
        box.velocityY = 0;
    } else if (box.isTouching(yellowSurface)&&box.bounceOff(yellowSurface)) {
        box.shapeColor = "yellow";
    }
}
