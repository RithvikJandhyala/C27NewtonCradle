
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var bob1,bob2,bob3,bob4,bob5;
var r1,r2,r3,r4,r5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,100,350,20);
	
  bob1 = new Bob(400,300);
  bob2 = new Bob(470,300);
  bob3 = new Bob(540,300);
  bob4 = new Bob(330,300);
  bob5 = new Bob(260,300);
 
  r1 = new Chain(bob1.body,ground.body,0,0);
  r2 = new Chain(bob2.body,ground.body,70,0);
  r3 = new Chain(bob3.body,ground.body,140,0);
  r4 = new Chain(bob4.body,ground.body,-70,0);
  r5 = new Chain(bob5.body,ground.body,-140,0);
	Engine.run(engine);
	
}


function draw() {

  rectMode(CENTER);
  background(255);
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
  if(keyIsDown (UP_ARROW)){
    Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-30.5,y:-22.5});
    }
  drawSprites();
 text("press up arrow to activate the cradle",600,350);
}



