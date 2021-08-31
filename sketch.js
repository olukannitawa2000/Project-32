const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var blower;
var ball;

function setup() {
  createCanvas(500,500);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
	world = engine.world;
  
  blower=new Blower(200,300,130,18);
  ball=new Ball(300,300,30,10);
  blowermouth=new Blowermouth(300,270,100,90);
  
button = createButton("Click to Blow")
button.position(width/2,height-100);
button.class("blowButton");
button.mousePressed(blow);


function blow(){
  Matter.Body.applyForce(ball.body, {x :0, y :0}, {x :0, y :0.05})}

  }

function draw() {
  background( 45, 45, 45); 
  Engine.run(engine);

  blower.display();
  ball.display();
  blowermouth.display()

  drawSprites();
}