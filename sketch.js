var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var particles = [];
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background("pink");
  textSize(35)
  text("Score : "+score,20,40);
  fill("blue");
  //text(mouseX + "," + mouseY, 20, 50);
  textSize(35)
  text(" 500 ", 5, 550);
  text(" 300 ", 80, 550);
  //give text fields to allocate numbers
  text(" 100 ", 320, 550);
  //These are sample text fields 
  text(" 200 ", 560, 550);
  
  Engine.update(engine);
  ground.display();
  
  if ( gameState =="end") {
    
    textSize(100);
    fill("yellow")
    text("GameOver", 150, 250);
   
    //return
  }

  

  

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 150) 
              //As we have mentioned that 1st 2 boxes are having score 500
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="end";                          
              }
              


              //The following code has divided the entire space into three buckets 500, 100, 200 
              //You can consider the particle's positions and mention the core 
              // For instance, if the bucket is between x= 200 and x = 300 and the score to be given is 100 
              //You can give following piece of code
              /*else if (particle.body.position.x < 300 && particle.body.position.x > 201 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }*/


              // You can go on an continue the same 
              // For another instance, if the bucket is between x=300 and x=400 and the score to be given is 150
              /*else if (particle.body.position.x<400 && particle.body.position.x>301 ) 
              {
                    score = score + 150;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }*/ 
              
              //Going further you can create the conditions based on the buckets you are creating
          
        }
  
      }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
 
}


function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}