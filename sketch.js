var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  fixedRect = createSprite(600, 200, 50, 50);
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
}

function draw() {
  background(255,255,255); 

  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(isTouching(fixedRect,movingRect))
  {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }

  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  

  drawSprites();
}
