var player;
var speed = 0.2;
var jump = 20;
var jumping = false;

var player_walk_sprites,
	player_walk,
	player_stand_sprites,
	player_stand;

var gravity = 1;
var platform;
var obstacle;

function preload() {
	player_walk_sprites = loadSpriteSheet("player.png", 64, 64, 8);
	player_walk = loadAnimation(player_walk_sprites);
	
	player_stand_sprites = loadSpriteSheet("player.png", 64, 64, 1);
	player_stand = loadAnimation(player_stand_sprites);
}

function setup() {
	createCanvas(720, 360);
	
	player = createSprite(100, 0);
	player.addAnimation("walk", player_walk);
	player.addAnimation("stand", player_stand);
	player.setCollider("circle", 0, 0, 32, 32);
	//player.debug = true;
	
	platform = createSprite(width/2, height, width, 20);
	obstacle = createSprite(300, height, 60, 40);
}

function draw() {
	background("black");
	
	if ( keyDown("space") && !jumping) {
		player.velocity.y -= jump;
		jumping = true;
	}
	
	if ( keyDown("a") ) {
		player.velocity.x -= speed;	
		player.changeAnimation("walk");
	} else if ( keyDown("d") ) {
		player.velocity.x += speed;	
		player.changeAnimation("walk");
	} else {
		player.changeAnimation("stand");	
	}
	
	player.velocity.y += gravity;
	if ( player.collide(platform) ) {
		player.velocity.y = 0;
		if (jumping) jumping = false;
	}
	
	if ( player.collide(obstacle) ) {
		player.remove();
	}
	
	drawSprites();
}