var bg,bgImg;
var player,playerImg;
var robots_img;
var laser, laserImg;
var shoot = 0;
var robots;
var score = 0;
var backMusic,laserSound;
var gameOver,gameOverImg;


//var lives = 3;
function preload(){
 bgImg = loadImage("assets/City2.jpg");
 playerImg = loadImage("assets/GRobot.png")
 robots_img = loadImage("assets/ERobot4.png");
 laserImg = loadImage("assets/laser.png");
backMusic = loadSound("assets/backMusic.mp3");
laserSound = loadSound("assets/LaserMusic.mp3");
heartImg = loadImage("assets/heart.png");
gameOverImg = loadImage("assets/GameOver.png");
}

function setup() {
createCanvas(700,600)
bg = createSprite(600,300);
bg.addImage(bgImg);
bg.scale = 2.5;

player = createSprite(50,550);
player.addImage(playerImg);
player.scale = 0.2;

//backMusic.play();
backMusic.loop();

edges = createEdgeSprites();

laserGroup= new Group;
robotsGroup = new Group;

//robots.setCollider("rectangle",0,0,400,robots.height);
  player.debug = true
  
  bg.velocityX =-2;
  
  
score = 0;
stroke("red");
fill("red");
textSize(20);
}