var n = 21/53;
var c = 53/21;
let step = 10;

function setup(){
  createCanvas(displayWidth,displayWidth);
  angleMode(DEGREES);
  colorMode(HSB);
  // background(0);
}

function draw(){
  for (let i = 0; i < step; i++) {
    var a = n * 137.3;
    var r = c * sqrt(n);
    var x = r * cos(a) + width / 2;
    var y = r * sin(a) + width / 2;
    fill((a*21) % 256, (a*53) % 255, 255);
    noStroke();
    ellipse(x,y,4,4);
    n++;
  }
  step += 0.1;
}
