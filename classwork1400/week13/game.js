var player;
var speed = 0.5;
var jump = 20;
var jumping = false;
var gravity = 1;
var platform;
var obstacle;


function setup() {
    createCanvas(720, 360);
    player = createSprite(100, 100, 40, 40);

    platform = createSprite(width / 2, height, width, 20);
    obstacle = createSprite(300, height, 60, 80);
}

function draw() {
    background("black");

    if (keyDown("space") && !jumping) {
        player.velocity.y -= jump;
        jumping = true; //if don't set this then jumps off screen.
    }


    //    if ( keyDown("a") ) {
    //        player.velocity.x -= speed;
    //    } else if ( keyWentDown("d") ) {
    //        player.velocity.x += speed;
    //    }

    /* he didn't mention specifically that this needs to go before the drawSprites();
        at first he didn't explain the difference between keyDown and keyWentDown (the diff
        is that keydown can run multiple times for one "down" because runs as long as key is down at
        the refresh rate. while keyWentDown only runs once per "down"
    */

    if (keyDown("a")) {
        player.velocity.x -= speed;
    } else if (keyDown("d")) {
        player.velocity.x += speed;
    }

    player.velocity.y += gravity;
    //detect collision after gravity in draw
    if (player.collide(platform)) {
        player.velocity.y = 0;
        if (jumping) jumping = false;
    }

    // if player collides with obstacle, remove player
    if (player.collide(obstacle)) {
        //        dplayer.remove();
        //or can reset to original position
        player.position.x = 100;
        player.position.y = 0;
        player.velocity.x = 0;
    }

    drawSprites();
}
