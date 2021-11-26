
function setup() {
  createCanvas(1366,652.49);

var box=createSprite(633,325,51,51);
}
function draw() 
{
  background(30);

if (keyIsDown(RIGHT_ARROW))
{
box.position.x = box.position.x + 20;

}

if (keyIsDown(LEFT_ARROW))
{
  box.position.x = box.position.x - 20;

}

if (keyIsDown(UP_ARROW))
{
  box.position.y = box.position.y + 20;

}

if (keyIsDown(DOWN_ARROW))
{
  box.position.y = box.position.y - 20;

}













drawSprites();
}
