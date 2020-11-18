
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobj1,bobj2,bobj3,bobj4,bobj5;
var roof,rope1,roof2;
var constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobj1 = new Bob(350,550,60);
  bobj2 = new Bob(400,550,60);
	bobj3 = new Bob(450,550,60);
	bobj4 = new Bob(500,550,60);
	bobj5 = new Bob(550,550,60);
  //roof = new Roof(400,580,600,20);
  roof1 = new Roof(400,100,300,15)
  rope1 = new Rope(bobj1.body,roof1.body,-80,0);
  rope2 = new Rope(bobj2.body,roof1.body,-40,0);
  rope3 = new Rope(bobj3.body,roof1.body,0,0);
  rope4 = new Rope(bobj4.body,roof1.body,40,0);
  rope5 = new Rope(bobj5.body,roof1.body,80,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("mistyrose");
  


  bobj1.display();
  bobj2.display();
  bobj3.display();
  bobj4.display();
  bobj5.display();
  //roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof1.display();
}



