var boy,boyRunning;




function preload(){
boyRunning = loadAnimation("images/png/Run__000.png", "images/png/Run__001.png" , "images/png/Run__002.png"
 , "images/png/Run__003.png" , "images/png/Run__004.png", "images/png/Run__005.png" , "images/png/Run__006.png" , "images/png/Run__007.png" 
 , "images/png/Run__008.png" , "images/png/Run__009.png");

boyStanding = loadAnimation("images/png/Idle__000.png");
bgimage = loadImage("images/BG/BG.png");
tile1img=loadImage("images/Tiles/newImg.png")

}


function setup(){
createCanvas(1200,750);
bg = createSprite(600,400);
bg.addImage(bgimage);
bg.scale = 1.3;

boy = createSprite(100,600,10,10);
boy.addAnimation("running",boyStanding)
boy.scale = 0.3;

tile1=createSprite(500,300,10,10);
tile1.addImage(tile1img);
tile1.scale=0.6
tile1.debug=true;

}

function draw(){
background("black");

if(keyWentDown(RIGHT_ARROW)){
    boy.addAnimation("running",boyRunning)
    boy.velocityX=5;
    
}
if(keyWentUp(RIGHT_ARROW)){
    boy.addAnimation("running",boyStanding)
    boy.velocityX=0;
    
}
if(keyWentDown(LEFT_ARROW)){
    boy.addAnimation("running",boyRunning)
    boy.velocityX=-5;
    
}
if(keyWentUp(LEFT_ARROW)){
    boy.addAnimation("running",boyStanding)
    boy.velocityX=0;
    
}
if(keyWentDown(UP_ARROW)){
    boy.addAnimation("running",boyRunning)
    boy.velocityY=-5;
    
}
if(keyWentUp(UP_ARROW)){
    boy.addAnimation("running",boyStanding)
    boy.velocityY=0;
    
}
if(keyWentDown(DOWN_ARROW)){
    boy.addAnimation("running",boyRunning)
    boy.velocityY=5;
    
}
if(keyWentUp(DOWN_ARROW)){
    boy.addAnimation("running",boyStanding)
    boy.velocityY=0;
    
}


edges=createEdgeSprites();
boy.collide(tile1)
boy.collide(edges);
drawSprites();
}