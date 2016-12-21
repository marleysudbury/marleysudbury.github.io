var n = 0;
var c = 4;

function setup(){
  createCanvas(1000,1000);
  angleMode(DEGREES);
  colorMode(HSB);
  background(0);
}

function draw(){
  var a = n * 137.3;
  var r = c * sqrt(n);
  var x = r * cos(a) + width / 2;
  var y = r * sin(a) + width / 2;
  fill(r % 256, 255, 255);
  noStroke();
  ellipse(x,y,4,4);
  n++;
}
