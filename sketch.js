const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var particles =[];
var plinkos = [];
var divisions = [];
var divisionHeight =300;



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;

//  border1 = new Border(240,2.5,width,5);
  border2 = new Border(240,797.5,width,5);
  border3 = new Border(2.5,325,5,800);
  border4 = new Border(477.5,325,5,800);

  ground = new Ground(240,787.5,width,15);

  for(var k = 5 ;k<=width;k = k+78){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for (var j =40; j<width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for (var j =15; j<width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for (var j =40; j<width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  for (var j =15; j<width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  } 
 
 
}

function draw() {
  background(0);
  Engine.update(engine);


    border3.display();
    border4.display();

    for(var k =0; k < divisions.length; k++){
      divisions[k].display();
    }
    for (var j=0; j < plinkos.length; j++){
      plinkos[j].display();
    }
    if(frameCount%60===0){
      particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    } 
    
    for (var m=0;m<particles.length;m++){
      particles[m].display();
    }

    ground.display();
 
    //  border1.display();
      border2.display();
      
  //  console.log(frameCount);
}