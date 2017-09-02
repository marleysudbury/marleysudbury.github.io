var cells = [];

function setup() {
	createCanvas(500, 500);
	cells.push(new Cell());
	cells.push(new Cell());
}

function draw() {
	background(51);
	for (var i = 0; i < cells.length; i++) {
		cells[i].move();
		cells[i].show();
	}
}

function mousePressed() {
	for (var i = cells.length - 1; i >= 0; i--) {
		if (cells[i].clicked(mouseX, mouseY)) {
			//console.log("CLOCKE1!");
			cells.push(cells[i].mitosis());
			cells.push(cells[i].mitosis());
		}
	}
}