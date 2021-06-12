const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies; 
var particles = [];
var plinkos= [];
var divisions =[];
var particle;
var divisionheight=300;
var Ground;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  
  Ground = new ground(width/2,height,width,20);

  for(var k=0;k<=width;k=k+80){
    divisions.push(new division(k,height-divisionheight/2,10,divisionheight))
  }

  for(var j=40;j<=width;j=j+50){
    plinkos.push(new plinko(j,75))
  }

  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new plinko(j,175))
  }

  for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new plinko(j,275));
  }

  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new plinko(j,375));
  }
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10,10,10)))
  }

  Ground.display();
  divisions.display();
  plinkos.dsiplay();
}