var angle = 0;
var slider;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, TWO_PI, PI/4, 0.0001);
}

function draw() {
  background(51);
  //angle = slider.value();
  if (angle < radians(45)){
    angle = angle + 0.01;
  }
  if (angle > radians(45)){
    reduce();
  }
  stroke(255);
  translate(200,height);
  branch(100);
}

function reduce(){
  while (angle > 0){
    angle = angle - (radians(89));
  }
}

function branch(len) {
  line(0, 0, 0, -len)
  translate(0, -len)
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.7);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.7);
    pop();
  }
}
