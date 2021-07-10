function setup() {
  createCanvas(400, 400);

}

function draw() {
//   for no trails! -- re draw the background every frame
  // background(220);
  
  // A rectangle rect(startx, starty, width, height)
  rect(40, 120, 80, 20);
  // An ellipse ellipse(startx, starty, width, height)
  ellipse(240, 240, 80, 80);
  // A triangle triangle(x1, y1, x2, y2, x3, y3)
  triangle(300, 100, 320, 100, 310, 80);
  //  Quadrilateral (x1, y1, x2, y2, x3, y3, x4, y4)
  quad(189, 18, 216, 18, 216, 360, 144, 360);
  
  noStroke();
  // fill('green');
  // rectMode(CENTER);
  // rect(mouseX, mouseY, 80, 80);
  // fill(220);
  // ellipse(mouseX, mouseY, 40, 40);
}