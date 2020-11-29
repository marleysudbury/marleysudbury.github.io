// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/145-2d-ray-casting.html
// https://youtu.be/TOEi6T2mtHo

// 2D Ray Casting
// https://editor.p5js.org/codingtrain/sketches/Nqsq3DFv-

let walls = [];
let ray;
let particle;
let xoff = 0;
let yoff = 10000;
let fov = 85;
let res = 50;
let facing = 0;
let px;
let py;
let speed = 1;
let fovSlide;
let resSlide;

function setup() {
  createCanvas(800, 400);
  px = width / 2 / 2;
  py = height / 2;
  for (let i = 0; i < 5; i++) {
    let x1 = random(width/2);
    let x2 = random(width/2);
    let y1 = random(height);
    let y2 = random(height);
    walls[i] = new Boundary(x1, y1, x2, y2);
  }
  walls.push(new Boundary(0, 0, width/2, 0));
  walls.push(new Boundary(width/2, 0, width/2, height));
  walls.push(new Boundary(width/2, height, 0, height));
  walls.push(new Boundary(0, height, 0, 0));
  particle = new Particle();
  createP('FOV');
  fovSlide = createSlider(0, 360, fov);
  fovSlide.elt.step=1;
  createP('RES');
  resSlide = createSlider(0, width/2, res);
  resSlide.elt.step=1;
}

function draw() {
  fov = fovSlide.value();
  res = resSlide.value();
  background(0);
  for (let wall of walls) {
    wall.show();
  }
  // Left
  if (keyIsDown(65)) {
    facing -= 5;
  }
  // Right
  if (keyIsDown(68)) {
    facing += 5;
  }
  // Forwards
  if (keyIsDown(87)) {
    let dir = ((facing % 360) + 360) % 360;
    if (dir > 180) {
      px += map(dir, 181, 359, -speed, speed);
    } else {
      px += map(dir, 0 , 180, speed, -speed);
    }
    if (dir > 90 && dir <= 270) {
      py += map(dir, 91, 270, speed, -speed);
    } else if (dir <= 90) {
      py += map(dir, 0, 90, 0, speed);
    } else {
      py += map(dir, 271, 359, -speed, 0);
    }
  }
  // Backwards
  if (keyIsDown(83)) {
    let dir = ((facing % 360) + 360) % 360;
    if (dir > 180) {
      px -= map(dir, 181, 359, -speed, speed);
    } else {
      px -= map(dir, 0 , 180, speed, -speed);
    }
    if (dir > 90 && dir <= 270) {
      py -= map(dir, 91, 270, speed, -speed);
    } else if (dir <= 90) {
      py -= map(dir, 0, 90, 0, speed);
    } else {
      py -= map(dir, 271, 359, -speed, 0);
    }
  }
  particle = new Particle();
  particle.show();
  particle.look(walls);
}
