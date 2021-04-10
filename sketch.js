const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world, bodies, constraint;
var block0, block1, block2, block3, block4, block5, blok6, block7,
block8, block9;
var ground;
var SlingS;
var background;
var polygon;
var polygonImage;


function preload() {

 polygonImage=loadImage("polygon.png");
    
}

function setup() {
    var canvas = createCanvas(1200, 800);
    engine = Engine.create();
    world = engine.world;
    

    ground = new Ground(600, height, 1200, 20);
    platform = new Ground(650, 390, 300, 20);

    
  
    block0 = new Block(575, 360, 50, 50);
    block1 = new Block(625, 360, 50, 50);
    block2 = new Block(675, 360, 50, 50);
    block3 = new Block(725, 360, 50, 50);
    block4 = new Block(600, 310, 50, 50);
    block5 = new Block(650, 310, 50, 50);
    block6 = new Block(700, 310, 50, 50);
    block7 = new Block(625, 260, 50, 50);
    block8 = new Block(675, 260, 50, 50);
    block9 = new Block(650, 210, 50, 50);


    polygon=Bodies.circle(200,50,20);
    World.add(world,polygon);

    slingS = new SlingShot(this.polygon, {x:200, y:50});

}

function draw() {
    
    background(255,0,0);
    Engine.update(engine);
   
    ground.display();
    platform.display();

    block0.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    
    imageMode(CENTER)
    image(polygonImage,polygon.position.x,polygon.position.y,40,40)



    
}

function mouseDragged() {

    Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });

}

function mouseReleased() {

    slingS.fly();

}

function keyPressed() {
    if(keyCode===32){
        slingS.attach(polygon.body);
    }
}
