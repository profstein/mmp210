var player;
var speed = 0.5;
var jump = 20;
var jumping = false;

//these will allow us to hold the sprites and animations for the player
var player_walk_sprites,
    player_walk,
    player_stand_sprites,
    player_stand;


var gravity = 1;
var platform;
var obstacle;

function preload() {
    player_walk_sprites = loadSpriteSheet("player.png", 64, 64, 8); //tells p5.play where the image is and what size the individual sprites are 64x64 and how many sprites, 8
    player_walk = loadAnimation(player_walk_sprites);

    //this loads in the stand animation but just loads one frame instead of all 8
    player_stand_sprites = loadSpriteSheet("player.png", 64, 64, 1);
    player_stand = loadAnimation(player_stand_sprites);

}

function setup() {
    createCanvas(720, 360);
    player = createSprite(100, 100, 40, 40);

    player.addAnimation("walk", player_walk);
    player.addAnimation("stand", player_stand);
    //lose collider because when don't use default sprite the collider doesn't work without further setup

    player.setCollider("circle", 0, 0, 32, 32); //set to 32 because using radius (half of 64)
    player.debug = true; //will show the collider circle

    platform = createSprite(width / 2, height, 10000, 20); //made the width 10000 so won't "fall off"
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

    //    if (keyDown("a")) {
    //        player.velocity.x -= speed;
    //    } else if (keyDown("d")) {
    //        player.velocity.x += speed;
    //    }
    //

    //Changed to use arrows instead of a and d
    if (keyDown(LEFT_ARROW)) {
        player.velocity.x -= speed;
        player.changeAnimation("walk");
    } else if (keyDown(RIGHT_ARROW)) {
        player.velocity.x += speed;
        player.changeAnimation("walk");
    } else {
        player.changeAnimation("stand");
    }

    player.velocity.y += gravity;
    //detect collision after gravity in draw
    if (player.collide(platform)) {
        player.velocity.y = 0;
        if (jumping) jumping = false;
    }

    //alternate way to end the down is to just check the y position. You either have to do that or
    // make the platform much wider or
    //not allow the player off the screen left and right
    //otherwise if the player moves off the screen it also keeps going down and never stops.

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
