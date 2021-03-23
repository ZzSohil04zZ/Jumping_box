var canvas;
var redS,blueS,greenS,yellowS;
var box;
var rightEdge,leftEdge,topEdge;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(800,600);

    //create 4 different surfaces

    music.loop()

    redS = createSprite(100,560,190,40)
    redS.shapeColor = "red"
    // redS.debug = true

    blueS = createSprite(300,560,190,40)
    blueS.shapeColor = "blue"

    greenS = createSprite(500,560,190,40)
    greenS.shapeColor = "green"

    yellowS = createSprite(700,560,190,40)
    yellowS.shapeColor = "yellow"

    topEdge = createSprite(400,0,800,1)
    rightEdge = createSprite(800,300,1,600)
    leftEdge = createSprite(0,300,1,600)


    //create box sprite and give velocity
    box = createSprite(400,200,35,35)
     box.velocityX =5
    box.velocityY = 6

}

function draw() {
    background(28);
    createEdgeSprites();

    box.bounceOff(topEdge)
    box.bounceOff(rightEdge)
    box.bounceOff(leftEdge)

    if(redS.isTouching(box)&&box.bounceOff(redS)){
        box.shapeColor = "red"
       
    
}

    if(greenS.isTouching(box)&&box.bounceOff(greenS)){
        box.shapeColor = "green"
        box.velocityX = 0
        box.velocityY = 0
        music.stop()
    }
    

    if(blueS.isTouching(box)&&box.bounceOff(blueS)){
        box.shapeColor = "blue"
    }

    if(yellowS.isTouching(box)&&box.bounceOff(yellowS)){
        box.shapeColor = "yellow"
    }

    
    



    //add condition to check if box touching surface and make it box
    drawSprites();
}
