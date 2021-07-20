var yveltalImage,yveltal;
var enemyImage,enemy;
var ground;
var bGImage,bG;
var tree;
var fireBallImage,fireBall;
var score=0;

var enemyGroup
function preload(){
  enemyImage=loadImage("MegaRay.png")

  yveltalImage=loadImage("Yveltal.png");

  bGImage=loadImage("moon light.jpg");

  tree=loadImage("tree.png")

  fireBallImage=loadImage("Yveltalball.png");
}

function setup(){
   
  bG=createSprite(400,200,30,30);
  bG.addImage(bGImage);
  bG.scale=3.5;

  bG.velocityX=-8;


  ground=createSprite(400,380,810,20);
   ground.shapeColor="red";
  ground.visible=false;


yveltal=createSprite(100,100,20,20);
yveltal.addImage(yveltalImage);
yveltal.scale=0.5;




 enemyGroup=createGroup();
}

function draw(){
createCanvas(800,400);

yveltal.collide(ground);

if (keyDown("space") && yveltal.y >= 100) {
  yveltal.velocityY = -8;
}

yveltal.velocityY = yveltal.velocityY + 0.8

if (bG.x < 50) {
  bG.x = bG.width / 2;
}

if(keyWentDown("right")){

  fireBall=createSprite(100,100,20,20);
  fireBall.addImage(fireBallImage)
  fireBall.scale=0.1;

  fireBall.y=yveltal.y;

  fireBall.velocityX=7;
}

if(keyWentUp("right")){
  fireBall.visible=false;
}

if(enemyGroup.isTouching(fireBall)){

  enemyGroup.destroyEach();

  fireBall.destroy();

}

enemy();
  drawSprites();
}

function enemy(){
  if (frameCount % 60 === 0) {
    var enemy = createSprite(600, 280, 10, 40);
    enemy.velocityX = -6 

    //generate random obstacles
    var rand = Math.round(random(1, 2));
    switch (rand) {
      case 1:
        enemy.addImage(enemyImage);
        break;
      case 2:
        enemy.addImage(tree);
        break;
         
      default:
        break;    
    }

    //assign scale and lifetime to the obstacle           
    enemy.scale = 0.3;
    enemy.lifetime = 500;

    //add each obstacle to the group
    enemyGroup.add(enemy);
  }
}

