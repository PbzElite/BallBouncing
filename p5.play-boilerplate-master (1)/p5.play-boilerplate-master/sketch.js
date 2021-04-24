const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies; 

var engine, world, ground, ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }

  var ballOption = {
    restitution: 1.0
  }

  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground);

  ball = Bodies.circle(200,100,30,ballOption);
  World.add(world,ball);

}

function draw() {
  background(0);  

Engine.update(engine);
  rectMode(CENTER);
  fill ("brown");
rect (ground.position.x,ground.position.y,400,20);

ellipseMode(RADIUS);
  fill ("red");
ellipse(ball.position.x,ball.position.y,30,30);
}