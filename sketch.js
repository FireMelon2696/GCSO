var car , wall , speed , weight;

function setup() {
  createCanvas(1000,400);
  speed=random(55,90);
  weight=random(400,1500);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(900,200,50,300);
  car.velocityX=speed;
}

function draw() {
  background(255,255,255); 
  if(wall.x-car.x<wall.width/2+car.width/2){
    car.velocityX=0;
    var deform = 0.5*speed*weight*weight/22500;
    if(deform>180){
      car.shapeColor="red";
    }
    if(deform<180 && deform>80){
      car.shapeColor="yellow";
    }
    if(deform<80){
      car.shapeColor="green";
    }
  } 
  drawSprites();
}