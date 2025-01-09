function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(143, 206, 255);
  angleMode(DEGREES)
 // CHORD fill mode.
 arc(180, 200, 100, 180, 0, 180)
 arc(290, 200, 100, 180, 0, 180)
 arc(180, 200, 100, 140, 180, 360)
 arc(290, 200, 100, 140, 180, 360)
}