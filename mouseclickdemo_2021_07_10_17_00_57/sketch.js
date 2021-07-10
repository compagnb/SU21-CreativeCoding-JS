var val = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(val);
  ellipse( mouseX, mouseY, 40, 40);
}

function mouseClicked(){
  if (val === 0 ){
    val = 255;
  }else{
    val = 0;
  }
}