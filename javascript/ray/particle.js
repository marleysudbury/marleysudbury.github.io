// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/145-2d-ray-casting.html
// https://youtu.be/TOEi6T2mtHo

// 2D Ray Casting
// https://editor.p5js.org/codingtrain/sketches/Nqsq3DFv-

class Particle {
  constructor() {
    this.pos = createVector(px, py);
    this.rays = [];
    for (let a = facing-(fov/2); a < facing+(fov/2); a += fov/res) {
      this.rays.push(new Ray(this.pos, radians(a)+facing));
    }
  }

  update(x, y) {
    this.pos.set(x, y);
  }

  look(walls) {
    for (let i = 0; i < this.rays.length; i++) {
      const ray = this.rays[i];
      let closest = null;
      let record = Infinity;
      for (let wall of walls) {
        const pt = ray.cast(wall);
        if (pt) {
          let d = p5.Vector.dist(this.pos, pt);
          const a = ray.dir - facing;
          d*=cos(a);
          if (d < record) {
            record = d;
            closest = pt;
          }
        }
      }
      if (closest) {
        // colorMode(HSB);
        // stroke((i + frameCount * 2) % 360, 255, 255, 50);
        stroke(255, 100);
        line(this.pos.x, this.pos.y, closest.x, closest.y);
        noStroke();
        fill(255, map(p5.Vector.dist(this.pos, closest), 0, sqrt(sq(width/2) + sq(height)), 255, -100));
        let rheight = map(p5.Vector.dist(this.pos, closest), 0, sqrt(sq(width/2) + sq(height)), height, 0);
        //let rheight = height-p5.Vector.dist(this.pos, closest)/2;
        let ry = (height - rheight) / 2;
        rect(i*(width/2)/res+(width/2), ry, (width/2)/res, rheight);
      }
    }
  }

  show() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 4);
  }
}
