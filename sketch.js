const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground1,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20,block21,block22,block23,block24,block25,ground2,ground3;
var polygon,slingShot;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  //polygon holder with slings
  var options = {
    'restitution':0.8,
    'friction':1.0,
    'density':1.0
  }
  polygon= Bodies.circle(50, 200, 20,options);
  World.add(world,polygon);

  slingShot = new SlingShot(polygon,{x:100,y:200});
  ground1 = new Ground(390,305,240,20);
  ground2 = new Ground(690,225,180,20);
  ground3 = new Ground(400,380,800,40);
  //level one
  block1 = new Box(300,275,30,40);
  block2 = new Box(330,275,30,40);
  block3 = new Box(360,275,30,40);
  block4 = new Box(390,275,30,40);
  block5 = new Box(420,275,30,40);
  block6 = new Box(450,275,30,40);
  block7 = new Box(480,275,30,40);
  //level two
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  //level three
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  //top
  block16 = new Box(390,155,30,40);

  block17 = new Box(690,195,30,40);
  block18 = new Box(720,195,30,40);
  block19 = new Box(750,195,30,40);
  block20 = new Box(660,195,30,40);
  block21 = new Box(630,195,30,40);
  block22 = new Box(690,155,30,40);
  block23 = new Box(660,155,30,40);
  block24 = new Box(720,155,30,40);
  block25 = new Box(690,115,30,40);
}

function draw() {
  background(0, 0, 0);  
  Engine.update(engine);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  ground1.display();
  ground2.display();
  ground3.display();
  //console.log(polygon);
  ellipseMode(RADIUS);
  ellipse(polygon.position.x,polygon.position.y,20,20);
  slingShot.display();
  drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if (keyCode === 32){
        slingShot.attach(polygon);
    }
}