var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

var background;

function preload() {
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaclesImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600,400);
  
  background("white");
  
  monkey = createSprite(80,310,50,50);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  score = 0;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();  
  
  var survivalTime = 0;
}

function draw() { 
  background(255);
  
  ground.x = ground.width/2;
  
  if(keyDown("space") ) {
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  spawnFood();
  spawnObstacles();
  
  drawSprites()
  
  stroke("white");
  textSize(20)
  fill("white") 
  text("score: "+ score, 500+50);
  
  stroke("black");
  textSize(20);
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survival Time: "+ survivalTime, 100,50);
}

function spawnFood() {
  if(frameCount % 80 === 0) {
    var food = createSprite(390,390,40,10);
    food.y= Math.round(random(120,200));
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -3;
}
}

function spawnObstacles() {
  if(frameCount % 300 === 0){ 
  var obstacle = createSprite(390,390,40,10)
  obstacle.y = Math.round(random(120,200))
  obstacle.addImage(obstaclesImage)
  obstacle.scale = 0.1;
  obstacle.velocityX = -3;  
}
}  