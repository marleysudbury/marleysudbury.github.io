function Missile(speed, x, y) {
  this.width = 5;
  this.height = 5;
  // if (x && y) {
		this.x = x //+ this.width/2;
		this.y = y //+ this.height;
  // } else {
  //   this.x = ship.x + (ship.width/2 - this.width/2);
  //   this.y = ship.y;
  // }
  // this.speed = speed;

  this.move = function() {
    this.y -= speed;
  }

  this.show = function() {
    rect(this.x, this.y, this.width, this.height);
  }
}
