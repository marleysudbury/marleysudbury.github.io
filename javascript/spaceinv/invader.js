function Invader(x, y) {
  this.x = x;
  this.y = y;
  this.width = 30;
  this.height = 20;

  this.move = function() {
    this.x += invXspeed;
    this.y += invYspeed;
  }

  this.show = function() {
    rect(this.x, this.y, this.width, this.height);
  }

  this.fire = function() {
    invMissiles.push(new Missile(-5, this.x+this.width/2, this.y+this.height));
  }
}
