function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255, 238, 105);
  angleMode(DEGREES)
 // CHORD fill mode.
 fill ("white")
 arc(180, 200, 100, 180, 0, 180)
 arc(290, 200, 100, 180, 0, 180)
 fill("black")
 arc(180, 200, 100, 140, 180, 360)
 arc(290, 200, 100, 140, 180, 360)
fill ("turquoise")
 arc(180, 200, 70, 100, 0, 180)
 arc(290, 200, 70, 100, 0, 180)
fill ("black")
 arc(180, 200, 40, 60, 0, 180)
 arc(290, 200, 40, 60, 0, 180)
fill ("white")
 ellipse (170, 220, 10, 10)
 ellipse (280, 220, 10, 10)
}