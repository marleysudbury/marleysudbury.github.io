let things = [];

function setup() {
  createCanvas(400, 400);
  things = [];
  things.push(new Thing(10, 20, 50));
}

function draw() {
  background(124);
  things[things.length-1].x = mouseX;
  things[things.length-1].y = mouseY;
  for (let i = 0; i < things.length; i++) {
    things[i].show();
  }
}

class Thing {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.d = d;
  }

  show() {
    ellipse(this.x, this.y, this.d, this.d);
  }

  split() {
    things.shift();
    things.push(new Thing(this.x -this.d, this.y - this.d, this.d/2))
    things.push(new Thing(this.x + this.d * 3, this.y, this.d/2))
  }
}