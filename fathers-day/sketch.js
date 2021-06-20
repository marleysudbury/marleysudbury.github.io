var n = 0;//21/53;
var c = 53/21;
let step = 1;

function setup(){
  createCanvas(displayWidth, displayWidth);
  angleMode(DEGREES);
  colorMode(RGB);
  background(0);
}

function draw(){
  for (let i = 0; i < step; i++) {
    var a = n * (53 + 21);//375.5;
    var r = c * sqrt(n);
    var x = r * cos(a) + width / 2;
    var y = r * sin(a) + width / 2;
    // fill(sin(21 * a) * 255 + (r % 21), cos(53 * a) * 255 + (r%53), sin(53/21 * a) * 255 +(r*cos(a)));
    // fill(cos(a) * 255, 255 * sin(a), a%255);
    // let col = map(a%360, 0, 360, 0, 255);
    let col = map(r, 0, 1440/2, 0, 255)
    fill(col*21%255,col*53%255,col*21*53%255,255-(step*5));
    noStroke();
    ellipse(x,y,4,4);
    n++;
  }
  step *= 1.01;
}
