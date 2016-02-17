var x;

function setup() {

    console.log(width);
    console.log(height);
    x = 100;
}

function draw() {
    background(255);
    
    x++;
    text(x, 20, 20);
}