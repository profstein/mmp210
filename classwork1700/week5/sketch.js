function setup() {
    createCanvas(640, 480);
    background("white");
 
    stroke("darkblue");

    var windowsHorizontal = 3;
    var windowsVertical = 2;
    var windowMargin = 10;

    for (var x = 0; x < width; x += width/windowsHorizontal) {
        for (var y = 0; y < height; y += height/windowsVertical) {
            drawWindow(x + windowMargin, y + windowMargin, width/windowsHorizontal - windowMargin*2, height/windowsVertical - 2*windowMargin, 8);
        }
    }
    
}

var drawWindow = function(x, y, w, h, m) {
    noStroke();
    fill("pink");
    rect(x, y, w/2, h);

    fill("lightgreen");
    rect(x + w/2, y, w/2, h);

    strokeWeight(m);
    stroke("darkblue");
    noFill();
    rect(x, y, w, h);

    stroke("darkgreen");
    strokeWeight(m/2);
    rect(x + m, y + m, w/2 - 2*m, h/2);
    rect(x + m + w/2, y + m, w/2 - 2*m, h/2);
    
    rect(x + m, y + 2*m + h/2, w/2 - 2*m, h/2 - 3*m);
    rect(x + m + w/2, y + 2*m + h/2, w/2 - 2*m, h/2 - 3*m);
}

