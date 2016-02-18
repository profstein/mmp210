var x = 0;
var y = 0;

function setup() {
	createCanvas(640, 480);
}

function draw() {
	background("white");

	strokeWeight(4);
	stroke("blue");
	
	if (mouseX > width/2) {
		fill("lightblue");
	} else {
		fill("pink");
	}

	var radius = 5;
	if (frameCount < 100) {
		radius = frameCount;
	} else {
		radius = 100;
	}

	if (x < width) {
		x++;
	} else {
		if (y < height) {
			y++;
		}
	}

	line(mouseX, mouseY, x, y);
	ellipse(mouseX, mouseY, radius, radius);
}