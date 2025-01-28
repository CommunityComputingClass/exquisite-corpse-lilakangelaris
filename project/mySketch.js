function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255,243,96);
  angleMode(DEGREES)
  eyes(180)
}
 // CHORD fill mode.
 function eyes(x) {
 fill ("white")
 arc(x, 200, 100, 180, 0, 180)
 arc(x+110, 200, 100, 180, 0, 180)
 fill(240,227,63)
 arc(x, 200, 100, 140, 180, 360)
 arc(x+110, 200, 100, 140, 180, 360)
fill (126,181,232)
 arc(x, 200, 70, 100, 0, 180)
 arc(x+110, 200, 70, 100, 0, 180)
fill ("black")
 arc(x, 200, 40, 60, 0, 180)
 arc(x+110, 200, 40, 60, 0, 180)
fill ("white")
 ellipse (x-10, 220, 10, 10)
 ellipse (x+100, 220, 10, 10)

 line(x-50, 200, 230, 200)
 line(x+60, 200, 340, 200)
}
