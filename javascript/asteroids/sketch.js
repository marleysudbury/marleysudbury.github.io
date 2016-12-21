var ship;
var asteroids = [];
var missiles = [];
var score = 0;

function setup(){
  //createCanvas(windowWidth, windowHeight);
  createCanvas(600, 300);
  ship = new Ship();
  for (var i = 0; i < 5; i++) {
    asteroids.push(new Asteroid());
  }
}

function draw(){
  background(0);
  for (var i = 0; i < asteroids.length; i++) {
    if (ship.hits(asteroids[i])) {
      // HITS

    }
    asteroids[i].render();
    asteroids[i].update();
    asteroids[i].edges();
  }
  for (var i = missiles.length - 1; i >= 0; i--) {
    missiles[i].render();
    missiles[i].update();
    if (missiles[i].offscreen()) {
      missiles.splice(i, 1);
    } else {
      for (var j = asteroids.length - 1; j >= 0; j--) {
        if (missiles[i].hits(asteroids[j])) {
          score += 1;
          if (asteroids[j].r > 20) {
            var newAsteroids = asteroids[j].breakup();
            asteroids = asteroids.concat(newAsteroids);
          }
          asteroids.splice(j, 1);
          missiles.splice(i, 1);
          break;
        }
      }
    }
  }
  ship.render();
  ship.turn();
  ship.update();
  ship.edges();
}

function keyReleased() {
  if (keyCode == RIGHT_ARROW || keyCode == LEFT_ARROW) {
    ship.setRotation(0);
  } else if (keyCode == UP_ARROW) {
    ship.boosting(false);
  } else if (key == " ") {
    ship.firing(false);
  }
}

function keyPressed() {
  if (key == " ") {
    ship.firing(true);
    // missiles.push(new Missile(ship.pos, ship.heading));
  } else if (keyCode == RIGHT_ARROW) {
    ship.setRotation(0.1);
  } else if (keyCode == LEFT_ARROW) {
    ship.setRotation(-0.1);
  } else if (keyCode == UP_ARROW) {
    ship.boosting(true);
  }
}
