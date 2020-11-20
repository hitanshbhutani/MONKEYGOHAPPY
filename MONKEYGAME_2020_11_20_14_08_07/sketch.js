
var monkey , monkey_running, ground;
var banana ,bananaImage, obstacle, obstacleImage;
var BananaGroup, obstacleGroup;
var survivaltime;
var foodManfac = true;
var obstaclesManfac = true;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  monkey = createSprite(50,265,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  ground = createSprite(200, 300, 800, 10);
  ground.velocityX = -3;
  BananaGroup = createGroup();
  obstaclesGroup = createGroup();
}


function draw() {
  background("white");
  
      
  if (ground.x < 0){
      ground.x = ground.width/2;
  }
  if(foodManfac == true){
    //food();
  } 
  if(obstaclesManfac){
    obstaclesFunc();
  }
  
  
  stroke("white"); 
  textSize(20); 
  fill("white");
  text("Survival Time: "+ survivaltime, 500,50);                 stroke("black"); 
  textSize(20);
  fill("black");                                                 survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50); 

  

  survivaltime = survivaltime + Math.round(getFrameRate()/60);
  drawSprites();
  
   monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -9;
  }
  
  if(monkey.isTouching(BananaGroup)){
    //monkey.destroy(); 
    //obstaclesGroup.setLifetimeEach(0);
    BananaGroup.setLifetimeEach(0);
    //foodManfac = false;
  }
  if(monkey.isTouching(obstaclesGroup)){
    monkey.destroy(); 
    obstaclesGroup.setLifetimeEach(0);
    BananaGroup.setLifetimeEach(0);
    foodManfac = false;
    obstaclesManfac = false;
  }
  
  
}

function food(){
  if (frameCount % 80 === 0) {
    var b = createSprite(600,120,40,10);
    b.y = Math.round(random(180,290));
    b.addImage(bananaImage);
    b.scale = 0.08;
    b.velocityX = -3;
    b.lifetime = 200;
    BananaGroup.add(b);
    
  }
}

function obstaclesFunc(){
  if (frameCount % 80 === 0) {
    var obs = createSprite(600,120,40,10);
    obs.y = 290;
    obs.addImage(obstacleImage);
    obs.scale = 0.04;
    obs.velocityX = -3;
    obs.lifetime = 200;
    obstaclesGroup.add(obs);
    
  }
}


