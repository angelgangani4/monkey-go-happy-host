
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var obstacle,obstacleImage;
var spawnobstacle;
var spawnFood;
var survivalTime=0;
var stroke;
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png");

 
}



function setup() {
  createCanvas(400,400);
monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
 monkey.scale=0.1;
  
 ground=createSprite(400,350,900,10); 
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  

 
  FoodGroup=new Group();
  obstacleGroup=new Group();
}

function draw() {
background(220);
   if(keyDown("space") ){
       monkey .velocityY = -12;
   } 
if (ground.x < 0){
      ground.x = ground.width/2;
    }
monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
 spawnobstacle();
   spawnFood();
  
 if( monkey.isTouching(FoodGroup)){
   score=score+1;
 }
    
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0;
    monkey.velocityY=0;
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
  }
  
 if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
  
 }
  
  obstacleGroup.setLifetimeEach(-1);
  FoodGroup.setLifetimeEach(-1);
  
  
drawSprites();  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+ score, 100,65);
 
  
 stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time: "+ survivalTime, 100,50);

function spawnobstacle(){
  if(frameCount%300===0){
    obstacle=createSprite(400,330,20,20);
  obstacle.addImage("obstacle.png",obstacleImage);
  obstacle.scale=0.1;
     obstacle.velocityX=-10;
    obstacle.lifetime=40;
    obstacleGroup.add(obstacle);
   
  }
}
}

function spawnFood(){
  if(frameCount%100===0){
  banana=createSprite(400,320,20,20);
  banana.addImage("banana.png",bananaImage);
  banana.scale=0.1;
     banana.velocityX=-20;
    banana.lifetime=40;
    banana.y=random(200,300);
    FoodGroup.add(banana);
  }
}





