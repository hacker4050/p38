var PLAY = 1;
var END = 0;
var gameState = PLAY;

var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score=0;

var gameOver, restart;
var distance;

localStorage["HighestScore"] = 0;

function preload(){
  trex_running =   loadAnimation("download (1).png","download.png");
  trex_collided = loadAnimation("download.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
  
  gameOverImg = loadImage("gameOver.png");
  restartImg = loadImage("restart.png");
}

function setup() {
  createCanvas(1000, 200);
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  //ground.velocityX = -(6 + 3*score/100);

  groundd = createSprite(400,180,400,20);
  groundd.addImage("ground",groundImage);
  groundd.x = 20;

 // grounddd = createSprite(1000,180,400,20);
 // grounddd.addImage("ground",groundImage);
 // grounddd.x = ground.width /2;
  //groundd.velocityX = -(6 + 3*score/100);

  trex = createSprite(50,180,20,50);
  
  trex.addAnimation("running", trex_running);
  trex.addAnimation("collided", trex_collided);
  trex.scale = 0.5;
  
  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
  gameOver.scale = 0.5;
  restart.scale = 0.5;

  gameOver.visible = false;
  restart.visible = false;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;

  invisibleGroundd = createSprite(400,190,400,10);
  invisibleGroundd.visible = false;
  
  cloudsGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;
  var obstacle = createSprite(600,165,10,40);
  //obstacle.debug = true;gv 
 // obstacle.velocityX = -(6 + 3*score/100);
  
  //generate random obstacles
  var rand = Math.round(random(1,6));
  switch(rand) {
    case 1: obstacle.addImage(obstacle1);
            break;
    case 2: obstacle.addImage(obstacle2);
            break;
    case 3: obstacle.addImage(obstacle3);
            break;
    case 4: obstacle.addImage(obstacle4);
            break;
    case 5: obstacle.addImage(obstacle5);
            break;
    case 6: obstacle.addImage(obstacle6);
            break;
    default: break;
  }
  
  
  //assign scale and lifetime to the obstacle           
  obstacle.scale = 0.5;

  var obstaclee = createSprite(1000,165,10,40);
  //obstacle.debug = true;gv 
 // obstacle.velocityX = -(6 + 3*score/100);
  
  //generate random obstacles
  var randd = Math.round(random(1,6));

  switch(randd) {
    case 1: obstaclee.addImage(obstacle1);
            break;
    case 2: obstaclee.addImage(obstacle2);
            break;
    case 3: obstaclee.addImage(obstacle3);
            break;
    case 4: obstaclee.addImage(obstacle4);
            break;
    case 5: obstaclee.addImage(obstacle5);
            break;
    case 6: obstaclee.addImage(obstacle6);
            break;
    default: break;
  }
  
  //assign scale and lifetime to the obstacle           
  obstaclee.scale = 0.5;

  var obstacleeee = createSprite(1400,165,10,40);
  //obstacle.debug = true;gv 
 // obstacle.velocityX = -(6 + 3*score/100);
  
  //generate random obstacles
  var randddd = Math.round(random(1,6));
  switch(randddd) {
    case 1: obstacleeee.addImage(obstacle1);
            break;
    case 2: obstacleeee.addImage(obstacle2);
            break;
    case 3: obstacleeee.addImage(obstacle3);
            break;
    case 4: obstacleeee.addImage(obstacle4);
            break;
    case 5: obstacleeee.addImage(obstacle5);
            break;
    case 6: obstacleeee.addImage(obstacle6);
            break;
    default: break;
  }
  
  //assign scale and lifetime to the obstacle           
  obstacleeee.scale = 0.5;

  var obstacleee = createSprite(1700,165,10,40);
  //obstacle.debug = true;gv 
 // obstacle.velocityX = -(6 + 3*score/100);
  
  //generate random obstacles
  var randdd = Math.round(random(1,6));

  switch(randdd) {
    case 1: obstacleee.addImage(obstacle1);
            break;
    case 2: obstacleee.addImage(obstacle2);
            break;
    case 3: obstacleee.addImage(obstacle3);
            break;
    case 4: obstacleee.addImage(obstacle4);
            break;
    case 5: obstacleee.addImage(obstacle5);
            break;
    case 6: obstacleee.addImage(obstacle6);
            break;
    default: break;
  }
  obstacleee.scale = 0.5;

  var obstacleeeee = createSprite(2000,165,10,40);
  //obstacle.debug = true;gv 
 // obstacle.velocityX = -(6 + 3*score/100);
  
  //generate random obstacles
  var randdddd = Math.round(random(1,6));

  switch(randdddd) {
    case 1: obstacleeeee.addImage(obstacle1);
            break;
    case 2: obstacleeeee.addImage(obstacle2);
            break;
    case 3: obstacleeeee.addImage(obstacle3);
            break;
    case 4: obstacleeeee.addImage(obstacle4);
            break;
    case 5: obstacleeeee.addImage(obstacle5);
            break;
    case 6: obstacleeeee.addImage(obstacle6);
            break;
    default: break;
  }
  obstacleeeee.scale = 0.5;

  var obstacleeeeee = createSprite(2600,165,10,40);
  //obstacle.debug = true;gv 
 // obstacle.velocityX = -(6 + 3*score/100);
  
  //generate random obstacles
  var randddddd = Math.round(random(1,6));

  switch(randddddd) {
    case 1: obstacleeeeee.addImage(obstacle1);
            break;
    case 2: obstacleeeeee.addImage(obstacle2);
            break;
    case 3: obstacleeeeee.addImage(obstacle3);
            break;
    case 4: obstacleeeeee.addImage(obstacle4);
            break;
    case 5: obstacleeeeee.addImage(obstacle5);
            break;
    case 6: obstacleeeeee.addImage(obstacle6);
            break;
    default: break;
  }
  obstacleeeeee.scale = 0.5;

  var obstacleeeeeee = createSprite(3000,165,10,40);
  //obstacle.debug = true;gv 
 // obstacle.velocityX = -(6 + 3*score/100);
  
  //generate random obstacles
  var randdddddd = Math.round(random(1,6));

  switch(randdddddd) {
    case 1: obstacleeeeeee.addImage(obstacle1);
            break;
    case 2: obstacleeeeeee.addImage(obstacle2);
            break;
    case 3: obstacleeeeeee.addImage(obstacle3);
            break;
    case 4: obstacleeeeeee.addImage(obstacle4);
            break;
    case 5: obstacleeeeeee.addImage(obstacle5);
            break;
    case 6: obstacleeeeeee.addImage(obstacle6);
            break;
    default: break;
  }
  obstacleeeeeee.scale = 0.5;

  var obstacleeeeeeee = createSprite(3500,165,10,40);
  //obstacle.debug = true;gv 
 // obstacle.velocityX = -(6 + 3*score/100);
  
  //generate random obstacles
  var randddddddd = Math.round(random(1,6));

  switch(randddddddd) {
    case 1: obstacleeeeeeee.addImage(obstacle1);
            break;
    case 2: obstacleeeeeeee.addImage(obstacle2);
            break;
    case 3: obstacleeeeeeee.addImage(obstacle3);
            break;
    case 4: obstacleeeeeeee.addImage(obstacle4);
            break;
    case 5: obstacleeeeeeee.addImage(obstacle5);
            break;
    case 6: obstacleeeeeeee.addImage(obstacle6);
            break;
    default: break;
  }
  obstacleeeeeeee.scale = 0.5;

  var obstacleeeeeeeee = createSprite(3700,165,10,40);
  //obstacle.debug = true;gv 
 // obstacle.velocityX = -(6 + 3*score/100);
  
  //generate random obstacles
  var randdddddddd = Math.round(random(1,6));

  switch(randdddddddd) {
    case 1: obstacleeeeeeeee.addImage(obstacle1);
            break;
    case 2: obstacleeeeeeeee.addImage(obstacle2);
            break;
    case 3: obstacleeeeeeeee.addImage(obstacle3);
            break;
    case 4: obstacleeeeeeeee.addImage(obstacle4);
            break;
    case 5: obstacleeeeeeeee.addImage(obstacle5);
            break;
    case 6: obstacleeeeeeeee.addImage(obstacle6);
            break;
    default: break;
  }
  obstacleeeeeeeee.scale = 0.5;

  var obstacleeeeeeeeee = createSprite(4000,165,10,40);
  //obstacle.debug = true;gv 
 // obstacle.velocityX = -(6 + 3*score/100);
  
  //generate random obstacles
  var randddddddddd = Math.round(random(1,6));

  switch(randddddddddd) {
    case 1: obstacleeeeeeeeee.addImage(obstacle1);
            break;
    case 2: obstacleeeeeeeeee.addImage(obstacle2);
            break;
    case 3: obstacleeeeeeeeee.addImage(obstacle3);
            break;
    case 4: obstacleeeeeeeeee.addImage(obstacle4);
            break;
    case 5: obstacleeeeeeeeee.addImage(obstacle5);
            break;
    case 6: obstacleeeeeeeeee.addImage(obstacle6);
            break;
    default: break;
  }
  obstacleeeeeeeeee.scale = 0.5;

  var obstacleeeeeeeeeee = createSprite(4400,165,10,40);
  //obstacle.debug = true;gv 
 // obstacle.velocityX = -(6 + 3*score/100);
  
  //generate random obstacles
  var randdddddddddd = Math.round(random(1,6));

  switch(randdddddddddd) {
    case 1: obstacleeeeeeeeeee.addImage(obstacle1);
            break;
    case 2: obstacleeeeeeeeeee.addImage(obstacle2);
            break;
    case 3: obstacleeeeeeeeeee.addImage(obstacle3);
            break;
    case 4: obstacleeeeeeeeeee.addImage(obstacle4);
            break;
    case 5: obstacleeeeeeeeeee.addImage(obstacle5);
            break;
    case 6: obstacleeeeeeeeeee.addImage(obstacle6);
            break;
    default: break;
  }
  obstacleeeeeeeeeee.scale = 0.5;
  obstaclesGroup.add(obstacle)
  obstaclesGroup.add(obstaclee)
  obstaclesGroup.add(obstacleee)
  obstaclesGroup.add(obstacleeee)
  obstaclesGroup.add(obstacleeeee)
  obstaclesGroup.add(obstacleeeeee)
  obstaclesGroup.add(obstacleeeeeee)
  obstaclesGroup.add(obstacleeeeeeee)
  obstaclesGroup.add(obstacleeeeeeeee)
  obstaclesGroup.add(obstacleeeeeeeeee)
  obstaclesGroup.add(obstacleeeeeeeeee)
  obstaclesGroup.add(obstacleeeeeeeeeee)



}


 

function draw() {
  //trex.debug = true;
  background(255);
  distance=distance+10;
  //text("Score: "+ score, 500,50);
  
  if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    //ground.velocityX = -(6 + 3*score/100);
  

  
    trex.velocityY = trex.velocityY + 0.8
  
   // if (ground.x < 0){s
    //  ground.x = ground.width/2;322222
   // }
  
    trex.collide(invisibleGround);
    trex.collide(invisibleGroundd);
      if (keyDown(DOWN_ARROW)){
    camera.position.x = camera.position.x+10;
    trex.x=trex.x+10;
    trex.y=160;
  }else {
  trex.velocityY = trex.velocityY + 0.8
  trex.y=160;
  trex.x=trex.x;
  }

     if(keyDown("space")) {
      trex.y = 60;
    }else {
      trex.y = 160;

    }
    

    
    //spawnClouds();
   // spawnObstacles();
    ground.velocityX = 0;

  
    if(obstaclesGroup.isTouching(trex)){
        gameState = END;
    }
  }
  else if (gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    
    //set velcity of each game object to 01
    ground.velocityX = 0;
    trex.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);
    cloudsGroup.setVelocityXEach(0);
    
    //change the trex animation
    trex.changeAnimation("collided",trex_collided);




    //set lifetime of the game objects so that they are never destroyed
    obstaclesGroup.setLifetimeEach(-1);
    cloudsGroup.setLifetimeEach(-1);
    
    if(mousePressedOver(restart)) {
      reset();
    }
  }

  groundd.x=3500;
  //grounddd.x=5500;


  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(80,120));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    //cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
  
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    //var obstacle = createSprite(600,165,10,40);
    //obstacle.debug = true;
   // obstacle.velocityX = -(6 + 3*score/100);
    
    //generate random obstacles
    
  }
}

function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  
  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();
  
  trex.changeAnimation("running",trex_running);
  
  if(localStorage["HighestScore"]<score){
    localStorage["HighestScore"] = score;
  }
  console.log(localStorage["HighestScore"]);
  
  score = 0;
  trex.x=0
  camera.position=0;
  
}