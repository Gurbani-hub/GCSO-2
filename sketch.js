var thickness,wall;
var speed,weight,bullet;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  car=createSprite(50,200,50,50)
  wall=createSprite(1200,200,thickness,height/2)
    
}

function draw() {
  background(255,255,255);
  
  car.velocityX=speed;
  
  if(wall.x-car.x<(car.width+wall.width)/2)
  
  {
    car.velocityX=0
    var deformation=(0.5*weight*speed*speed/22509)
    console.log(deformation)

    if(deformation>180) {
      car.shapeColor=(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=(230,230,0)
    }
    if(deformation<100) {
      car.shapeColor=(0,255,0)
    }


  }


  drawSprites();
}