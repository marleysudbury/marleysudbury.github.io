var missiles = [];
var invMissiles = [];
var invaders = [];
var shield1 = [];
var shield2 = [];
var shield3 = [];
var invXspeed = 2;
var invYspeed = 0.4;
var cols = 4;
var rows = 4;
var switchx = false;
var remMissile = false;
var lose = false;
var canFire = false;
var shieldCols = 3;
var shieldRows = 2;

function setup() {
	frameRate(60);
	createCanvas(450, 600);
	ship = new Ship();
	score = new Score();

	for (var i = 0; i < rows; i++) {
		for (var j = 0; j < cols; j++) {
			invaders.push(new Invader(width/cols*j, i*40+100));
		}
	}

	for (var i = 0; i < shieldRows; i++) {
		for (var j = 0; j < shieldCols; j++) {
			var middle = width/2-15
			shield1.push(new Shield(j*10+middle/2, i*10+500));
			shield2.push(new Shield(j*10+middle, i*10+500));
			shield3.push(new Shield(j*10+(middle*1.5), i*10+500));
		}
	}
}

function draw() {
	noStroke();
	background(51);
	fill(0, 255, 0);

	ship.move();
	ship.collisionDetect();
	ship.show();

	for (var i = 0; i < shield1.length; i++) {
		shield1[i].show();
	}
	for (var i = 0; i < shield2.length; i++) {
		shield2[i].show();
	}
	for (var i = 0; i < shield3.length; i++) {
		shield3[i].show();
	}

	for (var i = 0; i < invaders.length; i++) {
		if (invaders[i].x + invaders[i].width > width || invaders[i].x < 0) {
			switchx = true;
		}
	}

	if (switchx) {
		invXspeed = -invXspeed;
		switchx = false;
	}

	for (var i = invaders.length - 1; i >= 0; i--) {
		invaders[i].move();
		invaders[i].show();
		if (invaders[i].x >= ship.x && invaders[i].x + invaders[i].width <= ship.x+ship.width) {
			// invaders[i].fire();
			for (var j = 0; j < invaders.length; j++) {
				if (invaders[i].x == invaders[j].x && invaders[i].y < invaders[j].y) {
					canFire = false;
				} else {
					canFire = true;
				}
			}
			if (canFire && invMissiles.length != 1) {
			invaders[i].fire();
			}
		}
		if (invaders[i].y + invaders[i].height > 500) {
			for (var j = shield1.length - 1; j >= 0; j--) {
				shield1.splice(j,1);
			}
			for (var j = shield2.length - 1; j >= 0; j--) {
				shield2.splice(j,1);
			}
			for (var j = shield3.length - 1; j >= 0; j--) {
				shield3.splice(j,1);
			}
		}
		if (invaders[i].y + invaders[i].height > ship.y) {
			lose = true;
		}
	}

	score.show();

	for (var i = invMissiles.length - 1; i >= 0; i--) {
		invMissiles[i].move();
		invMissiles[i].show();
		if (invMissiles[i].y > height) {
			remMissile = true;
		}
		if (invMissiles[i].x >= ship.x && invMissiles[i].x <= ship.x + ship.width && invMissiles[i].y >= ship.y && invMissiles[i].y <= ship.y + ship.height) {
			remMissile = true;
			lose = true;
		}
		for (var j = shield1.length - 1; j >= 0; j--) {
			if (shield1[j].x + shield1[j].width >= invMissiles[i].x && shield1[j].x <= invMissiles[i].x + invMissiles[i].width && invMissiles[i].y + invMissiles[i].height >= shield1[j].y && invMissiles[i].y <= shield1[j].y + shield1[j].height) {
				shield1.splice(j,1);
				remMissile = true;
			}
		}
		for (var j = shield2.length - 1; j >= 0; j--) {
			if (shield2[j].x + shield2[j].width >= invMissiles[i].x && shield2[j].x <= invMissiles[i].x + invMissiles[i].width && invMissiles[i].y + invMissiles[i].height >= shield2[j].y && invMissiles[i].y <= shield2[j].y + shield2[j].height) {
				shield2.splice(j,1);
				remMissile = true;
			}
		}
		for (var j = shield3.length - 1; j >= 0; j--) {
			if (shield3[j].x + shield3[j].width >= invMissiles[i].x && shield3[j].x <= invMissiles[i].x + invMissiles[i].width && invMissiles[i].y + invMissiles[i].height >= shield3[j].y && invMissiles[i].y <= shield3[j].y + shield3[j].height) {
				shield3.splice(j,1);
				remMissile = true;
			}
		}
		if (remMissile) {
			invMissiles.splice(i, 1);
			remMissile = false;
		}
	}

	for (var i = missiles.length - 1; i >= 0; i--) {
		missiles[i].move();
		missiles[i].show();
		if (missiles[i].y < 0) {
			// score.inc();
			remMissile = true;
		}
		for (var j = invaders.length - 1; j >= 0; j--) {
			if (missiles[i].x >= invaders[j].x && missiles[i].x <= invaders[j].x +invaders[j].width && missiles[i].y >= invaders[j].y && missiles[i].y <= invaders[j].y + invaders[j].height) {
				score.inc();
				remMissile = true;
				invaders.splice(j, 1);
				// invYspeed += 0.01;
			}
		}
		for (var j = shield1.length - 1; j >= 0; j--) {
			if (shield1[j].x + shield1[j].width >= missiles[i].x && shield1[j].x <= missiles[i].x + missiles[i].width && missiles[i].y + missiles[i].height >= shield1[j].y && missiles[i].y <= shield1[j].y + shield1[j].height) {
				shield1.splice(j,1);
				remMissile = true;
			}
		}
		for (var j = shield2.length - 1; j >= 0; j--) {
			if (shield2[j].x + shield2[j].width >= missiles[i].x && shield2[j].x <= missiles[i].x + missiles[i].width && missiles[i].y + missiles[i].height >= shield2[j].y && missiles[i].y <= shield2[j].y + shield2[j].height) {
				shield2.splice(j,1);
				remMissile = true;
			}
		}
		for (var j = shield3.length - 1; j >= 0; j--) {
			if (shield3[j].x + shield3[j].width >= missiles[i].x && shield3[j].x <= missiles[i].x + missiles[i].width && missiles[i].y + missiles[i].height >= shield3[j].y && missiles[i].y <= shield3[j].y + shield3[j].height) {
				shield3.splice(j,1);
				remMissile = true;
			}
		}
		if (remMissile) {
			missiles.splice(i, 1);
			remMissile = false;
		}
	}

	if (lose) {
		for (var i = missiles.length - 1; i >= 0; i--) {
			missiles.splice(i, 1);
		}
		background(51);
		textSize(20);
		text("Score: " + score.points, width/5, width/5-20);
		text("YOU LOSE!", width/5, width/5);
		text("Thanks for playing!", width/5, width/5+20);
		text("Refresh page to replay", width/5, width/5+40);
		ship.y = -100;
	}

	if (invaders.length == 0) {
		background(51);
		textSize(20);
		text("Score: " + score.points, width/5, width/5-20);
		text("YOU WIN!", width/5, width/5);
		text("Thanks for playing!", width/5, width/5+20);
		text("Refresh page to replay", width/5, width/5+40);
	}
}

function Score() {
	this.points = 0;

	this.inc = function() {
		this.points++;
	}

	this.show = function() {
		text("Score: " + this.points, 10, 20);
		text("MissilesExist: " + missiles.length + " | " + invMissiles.length, 10, 30);
		text("InvadersExist: " + invaders.length, 10, 40);
		text("invXspeed: " + invXspeed, 10, 50);
		text("invYspeed: " + invYspeed, 10, 60);
		text("canFire: " + canFire, 10, 70);
	}
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		ship.fire();
	}
}
