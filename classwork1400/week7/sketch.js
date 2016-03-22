function setup() {
    createCanvas(640, 480);
    background("white");

    var numberOfRects = 1000;

    var w = width/numberOfRects;

    for (var x = 0; x < w * numberOfRects; x += w) {
        rect(x, 0, w, w);
    }

}

