const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
var dustbin1,dustbin2,dustbin3;
var packageBody,ground1,ground2,ground3,ground4,ppr;

function setup() {
	createCanvas(1330, 630);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	dustbin1 = new Dustbin(1000,590,170,30);
	dustbin2 = new Dustbin(925,515,20,180);
	dustbin3 = new Dustbin(1075,515,20,180);
   ground1 = new Ground(400,600,1900,15);
   ground2 = new Ground(400,50,1900,15);
   ground3 = new Ground(50,400,15,1900);
   ground4 = new Ground(1300,400,15,1900);
    ppr = new Paper(100,100,33);
 
}


function draw() {
 
  background(0,0,0) ;
 
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ppr.display();

}

function keyPressed(){
   if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ppr.body,ppr.body.position,{x:  215 , y: -260});
   }
}

 



