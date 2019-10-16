// Four in a row
// by M. S. R. Sudbury
// https://www.msudbury.uk

let grid;
let cols;
let rows;
let w;
let h;

function setup() {
    grid = [];
    cols = 5;
    rows = 5;
    createCanvas(400,400);
    w = width / cols;
    h = height / rows;
}

function draw() {
    for (let i=0; i<rows; i++) {
        for (let j=0; j<cols; j++) {
            square(j*w, i*h, 100);
        }
    }
}
