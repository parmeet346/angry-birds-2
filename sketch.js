const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground0;
function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
   
    box1 = new Box(400,300,60,60);
    box2 = new Box(600,300,60,60);
     ground0 = new Ground(400,400,800,50)
     Pig1 = new Pig(520,300)
     Log1 = new Log(495,250,300,PI/2)
     bird1 = new Bird(100,100);

     box3 = new Box(400,200,60,60)
     box4 = new Box(600,200,60,60)
     log2 = new Log(495,160,300,PI/2)
     pig2 = new Pig(520,200)
     box5 = new Box(520,100,60,60)
     log3 = new Log(500,120,100,PI/8)
     log4 = new Log(540,120,100,-PI/8)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
   ground0.display();
   Pig1.display();
   Log1.display();
   bird1.display();
   box3.display();
   box4.display();
   log2.display();
   pig2.display();
   box5.display();
   log3.display();
   log4.display();

}