function setup() {
    createCanvas(640, 480);
    background("white");
    translate(width/2, height/2);
}
function draw() {
    rotate(PI*frameCount/100);
    textSize(50);
    stroke("white");
    fill("green");
    text("MMP 210", 0, 0);
}