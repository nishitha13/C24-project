
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var crumpledPaper;
var bin1,bin2,bin3;
var ground;


function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	crumpledPaper = new Paper(250,540,33,20);
	
	ground = new Ground(600,590,1200,15);

	bin1 = new Dustbin(902,505,10,120);
    bin2 = new Dustbin(962,565,130,10);
    bin3 = new Dustbin(1024,505,10,120);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  crumpledPaper.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();

  drawSprites();
 
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:150,y:-200});
    }
}

