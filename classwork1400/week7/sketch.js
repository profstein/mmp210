function setup() {
    createCanvas(640, 640);
    background("white");

    var columns = 12;
    var rows = 12;
    var w = width/columns;
    var h = height/rows;

    noFill();
    strokeWeight(2);
    rectMode(CENTER);

    for (var x = 0; x < width; x += w) {
    	for (var y = 0; y < height; y += h) {
    		
    		var r = random(0,50);
			var g = random(100,200);
			var b = random(0,50);

			if (x > w*3 && x < w*7 && y > h*3 && y < h*7) {
				stroke(r * 10, g/10, b * 10);
			} else {
				stroke(r, g, b);
			}
    		
    		var shape = Math.floor(random(0, 4));

    		if (shape == 0) {
    			arc(x, y, w*2, w*2, 0, HALF_PI);
    		} else if (shape == 1) {
    			arc(x + w, y, w*2, w*2, HALF_PI, PI);
    		} else if (shape == 2) {
    			arc(x + w, y + h, w*2, w*2, PI, PI + HALF_PI);
    		} else if (shape == 3) {
    			arc(x, y + h, w*2, w*2, PI + HALF_PI, 0);
    		}
    	}
    }
}

