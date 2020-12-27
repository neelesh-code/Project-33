var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions= [];

var score=0;

var particle;

var turn=0;


var PLAY=1;
var END=0;


var gameState=PLAY;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);



   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
      plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 
function mousePressed(){
  if(gameState===PLAY){
    turn++;
    particle=new Particle(mouseX, 10,10,10);

  }
}

function draw() {
  background("black");
  
 
  Engine.update(engine);
  textSize(20)
  fill("white")
  
  text("Score: "+score, 700, 30);

  text("1000", 20, 600);
  text("1000", 100, 600);
  text("500", 180, 600);
  text("500", 260, 600);

  text("500", 340, 600);
  text("500", 420, 600);

  text("500", 500, 600);
  text("500", 580, 600);
  text("1000", 660, 600);
  text("1000", 740, 600);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

  
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null){
     particle.display();
     if(particle.body.position.y>760){
       if(particle.body.position.x<160){
         score=score+1000;
         particle=null;
         if(turn>=5){
           gameState=END;
         }
       }
     }
   }

   if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>160 && particle.body.position.x>640){
        score=score+500;
        particle=null;
        if(turn>=5){
          gameState=END;
        }
      }
    }
  }

  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>640){
        score=score+500;
        particle=null;
        if(turn>=5){
          gameState=END;
        }
      }
    }
  }

  if(gameState===END){
    particle=null;
    textSize(90)
    text("GAME OVER", 400,400);
  }
  
};





