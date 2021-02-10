var canvas;
var music;

var ball;

var box1,box2,box3,box4;

var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    
    ball=createSprite(random(20,750),100,50,50);
    ball.shapeColor="white";
    ball.velocityY=5;
    ball.velocityX=3;
    //create 4 different surfaces
    box1=createSprite(100,570,180,40);
    box1.shapeColor="red";
    box2=createSprite(300,570,180,40);
    box2.shapeColor="yellow";
    box3=createSprite(500,570,180,40);
    box3.shapeColor="blue";
    box4=createSprite(700,570,180,40);
    box4.shapeColor="green";

    


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();
    ball.bounceOff(edges);




    //add condition to check if box touching surface and make it box

    if(box3.isTouching(ball) && ball.bounceOff(box3)){
        ball.shapeColor = "blue";
        music.play();
     }

     if(box2.isTouching(ball) && ball.bounceOff(box2)){
        ball.shapeColor = "yellow";
     }

     if(box1.isTouching(ball) && ball.bounceOff(box1)){
        ball.shapeColor = "red";
        ball.velocityX=0;
        ball.velocityY=0;
     }

     if(box4.isTouching(ball) && ball.bounceOff(box4)){
        ball.shapeColor = "green";
     }
    drawSprites();
}
