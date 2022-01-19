var boxe
function setup() {
  createCanvas(400,400);
  boxe = createSprite(200,200,40,40)
}

function draw() 
{
  background(30);
 
  if (keyIsDown(LEFT_ARROW)) { boxe.position.x=boxe.position.x-5  }
  if (keyIsDown(RIGHT_ARROW)) { boxe.position.x=boxe.position.x-5  }
  if (keyIsDown(UP_ARROW)) { boxe.position.y=boxe.position.y-5  }
  if (keyIsDown(DOWN_ARROW)) { boxe.position.y=boxe.position.y-5  }
drawSprites()
}



