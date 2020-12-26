var fixedRect,movingRect;

function setup() {
  createCanvas(900,800);
  fixedRect = createSprite(850, 400, 50, 80);
  fixedRect.shapeColor = "white";
  fixedRect.debug = false;
  movingRect = createSprite(100,400,80,30);
  movingRect.shapeColor = "red";
  movingRect.debug = false;
  movingRect.velocityX = 10;
}

function draw() {
  background(0); 
    

  if(movingRect.isTouching(fixedRect)){
    movingRect.velocityX = 0;
  
}
  



  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
  movingRect.shapeColor = "yellow";
  fixedRect.shapeColor = "red";
}
else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
drawSprites();
}