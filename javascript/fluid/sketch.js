// Fluid simulation in p5.js
// Inspired by Coding Train Challenge #132
// Obviously nowhere near finished soz :(

let grid;

function setup() {
    createCanvas(400, 400);
    grid = [];
    for (let i=0; i<10; i++) {
        grid[i] = [];
        for (let j=0; j<10; j++) {
            grid[i][j] = 0;
        }
    }
}

function draw() {
    background(123);
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[i].length; j++) {
            let w = width / grid[i].length;
            let h = height / grid.length;
            let x = j * w;
            let y = i * h;
            rect(x, y, w, h);
        }
    }
}

