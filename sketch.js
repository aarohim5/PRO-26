const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var ground;
var paper;
var log1;
var engine,world;
var slingshot;

function setup() {
	var canvas = createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

  ground = new Ground(width/2,670,width,20);
  paper = new Paper(200,500);
 // log1 = new Logs(1000,385,200,10);
	//log2 = new Logs(900,339,10,100);
	log3 = new Logs(1200,650);
	slingshot = new Launcher(paper.body,{x:200, y:600});
	Engine.run(engine);
  Render.run(render);
  
}


function draw() {
  background("lightblue");
 Engine.update(engine);
 // keyPressed();
 paper.display();
  ground.display();
 slingshot.display();
 // log1.display();
  //log2.display();
  log3.display();

 // mouseDragged();
  //mouseReleased();

  drawSprites(0);
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:125,y:-135});
  }
}
		
function mouseReleased(){
    slingshot.fly();
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}

	


