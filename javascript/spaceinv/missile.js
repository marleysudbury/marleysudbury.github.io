function Missile(speed, x, y) {
	this.width = 5;
	this.height = 5;
	this.x = x;
	this.y = y;

	this.move = function() {
		this.y -= speed;
	}

	this.show = function() {
		rect(this.x, this.y, this.width, this.height);
	}
}
