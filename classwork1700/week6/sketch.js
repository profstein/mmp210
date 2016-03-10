function setup() {
    createCanvas(640, 480);
    background("white");
    
    rocket( 150, 150, 50);
    rocket( 250, 150, 20);
    
    rocket( 350, 150, 50);
    rocket( 350, 150, 20);
    
}

var rocket = function(x, y, size) {
        
    var fin = size/4;
    var cone = size * 1.5;
    var windowWidth = size/3.33;
    var distance = size/2;
        
    rect(x, y, size * 2, size);
    triangle(x, y, x, y - fin, x + size, y);
    triangle(x, y + size, x, y + size + fin, x + size, y + size);
    
    
    arc(x + size*2, y + size/2, cone, size, PI + HALF_PI, HALF_PI);
    
    for (var i = 0; i < 3; i++ ) {
        ellipse( 
            x + distance + i*distance, 
            y + size/2, 
            windowWidth, 
            windowWidth );
    }
}















