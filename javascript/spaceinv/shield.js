function Shield(xCo, yCo) {
	this.x = xCo;
	this.y = yCo;
	this.width = 10;
	this.height = 10;
	this.durability = 3;

  this.show = function() {
    rect(this.x, this.y, this.width, this.height)
  }
	this.checkDurability = function() {
		if (this.durability = 0) {
			
		}
	}
}
