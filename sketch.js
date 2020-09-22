
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var lbin, rbin, bbin;
var cpaper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rbin = new Bin(750, 625, 20, 100);
	rbin.shapeColor = "red";

	bbin = new Bin(650, 675, 100, 20);
	bbin.shapeColor = "white";

	lbin = new Bin(550, 625, 20, 100);
	lbin.shapeColor = "red";

	//cpaper = new Paper();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  lbin.display();
  bbin.display();
  rbin.display();

  drawSprites();
 
}



