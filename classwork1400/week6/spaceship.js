function setup() {
    createCanvas(640, 480);
    background("white");
    
    
    spaceship(180, 140, 120);
    spaceship(280, 240, 40);
     
}

var spaceship = function(x, y, size) {
    var fin = size/12;
    triangle(x,y - fin,x,y + size/2 + fin,x + size, y + size/4);
    rect(x, y, size, size/2);
    arc(x + size, y + size/4, size, size/2, PI + HALF_PI, HALF_PI);
    for (var i = 1; i < 4; i++) {
        ellipse(x + i*size/3 , y + size/4, fin, fin);
    }
}
