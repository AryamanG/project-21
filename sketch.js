var bullet,wall,thickness;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,50,20);
  bullet.shapeColor = "white";
  wall=createSprite(1500,200,60,height/2);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random
  bullet.velocityX = speed;
}

function draw() {
  background ("black"); 
  if(wall.x-bullet.x < (bullet.width+wall.width)/2) {
  
    bullet.velocityX=0;
    deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180) {
      bullet.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      bullet.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      bullet.shapeColor=color(0,255,0);
    }


  }
  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
  if (hasCollided(bullet, wall)){
    bullet.velocityX=0;
    var damage=0.5 * speed * speed/(thickness * thickness *thickness);
    if (damage>10){
      wall.shapeColor=color(255,0,0);

    }
    
    if (damage<10) {
      wall.shapeColor=color(0,255.0);
    }
  }

}