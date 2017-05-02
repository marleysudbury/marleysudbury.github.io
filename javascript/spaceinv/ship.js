function Ship() {
  this.width = 30;
  this.height = 20;
  this.x = width/2 - this.width/2;
  this.y = height - this.height*2;
  this.speed = 5;

  this.move = function(dir) {
    //this.x += random(-10, 10);
    if (keyIsDown(LEFT_ARROW)) {
      this.x += -this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }
  }

  this.fire = function() {
    missiles.push(new Missile(5, this.x+(this.width/2-2.5), this.y));
  }

  this.show = function() {
    rect(this.x + this.width/3, this.y, this.width/3, this.height);
    rect(this.x, this.y + this.height/3, this.width, this.height/1.5)

    // rect(this.x + (this.width/2 - this.height/2), this.y - this.height/2, this.height, this.height/2);
    // rect(this.x, this.y, this.width, this.height);
  }

  this.collisionDetect = function() {
    if (this.x < 0 || this.x + this.width > width) {
      this.x = constrain(this.x, 0, width - this.width);
    }
  }
}
