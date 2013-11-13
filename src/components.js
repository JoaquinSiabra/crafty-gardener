
// El componente Grid permite colocar en pantalla los objetos 
// del juego (mediante la funcion "at")
Crafty.c('Grid', {

	init: function() {
		this.attr({
			w: Game.map_grid.tile.width,
			h: Game.map_grid.tile.height
		})
	},

	at: function(x, y) {
		if (x === undefined && y === undefined) {
			return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height }
		} else {
			this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });
			return this;
		}
	}
});

// Se define el componente "Actor" como un tipo de entidad que 
// 1. se dibuja en 2D
// 2. en el canvas
// 3. mediante el grid
// No nos interesa que todos los actores sean solidos
Crafty.c('Actor', {
	init: function() {
		this.requires('2D, Canvas, Grid');
	},
});

// Se define el componente "Enemy" como un tipo de entidad que 
// 1. es un Actor
// 2. es solido
// 3. causa ciertos efectos en el protagonista (de momento, solo un sonido)
Crafty.c('Enemy', {
	init: function() {
		this.requires('Actor, Solid');
	},

	visit: function() {
		Crafty.audio.play('damage',1);
		//TODO Crafty.trigger('EnemyVisited', this), para gestionar los contadores de salud
	}
});

/*-----------------------------PROTAGONISTA--------------------------------*/
Crafty.c('PlayerCharacter', {

	init: function() {
		this.requires('Actor, Multiway, Gravity, Collision, spr_player, Platform, SpriteAnimation, Physics')
			.multiway({x:2,y:2}, {UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180})
			.onHit('Solid', this.stopMovement)
			.onHit('Collectible', this.hitFlower)
			.onHit('Enemy', this.hitEnemy)
			.addComponent('Gravity').gravity('Solid').gravityConst(0.04)
			.onHit('Village', this.visitVillage)
			// These next lines define our four animations
			//  each call to .animate specifies:
			//  - the name of the animation
			//  - the x and y coordinates within the sprite
			//     map at which the animation set begins
			//  - the number of animation frames *in addition to* the first one
			.animate('PlayerMovingUp',    0, 0, 2)
			.animate('PlayerMovingRight', 0, 1, 2)
			.animate('PlayerMovingDown',  0, 2, 2)
			.animate('PlayerMovingLeft',  0, 3, 2);	
	
		
		// Watch for a change of direction and switch animations accordingly
		var animation_speed = 4;
		this.bind('NewDirection', function(data) {
			if (data.x > 0) {
				this.animate('PlayerMovingRight', animation_speed, -1);
			} else if (data.x < 0) {
				this.animate('PlayerMovingLeft', animation_speed, -1);
			} else if (data.y > 0) {
				this.animate('PlayerMovingDown', animation_speed, -1);
			} else if (data.y < 0) {
				this.animate('PlayerMovingUp', animation_speed, -1);
			} else {
				this.stop();				
			}
		});
	},

	stopMovement: function() {
		this._speed = 0;
		this.dy=0;
		if (this._movement) {
			this.x -= this._movement.x;
			this.y -= this._movement.y;
		}
	},

	hitFlower: function(data) {
		flower = data[0].obj;
		flower.visit();
	},
	
	hitEnemy: function(data) {
		enemy = data[0].obj;
		enemy.visit();
	}
});


/*---------------------------ESCENARIO----------------------------*/
Crafty.c('Tree', {
	init: function() {
		this.requires('Actor, Solid, spr_tree');
	},
});

Crafty.c('Trunk', {
	init: function() {
		this.requires('Actor, Solid, spr_trunk');
	},
});

Crafty.c('Branch', {
	init: function() {
		this.requires('Actor, Solid, spr_branch');	
	},

});

/*------------------------ENEMIGOS----------------------*/

Crafty.c('Water', {
	init: function() {
		this.requires('Actor, Solid, spr_water, Enemy');
	},
});

Crafty.c('Bird', {
	init: function() {
		
		this.dx=1;
		var bird_animation_speed = 20;
		this.requires('Actor, Solid, spr_bird, Collision, SpriteAnimation, Enemy')		
		.bind('EnterFrame', function() {
			this.x += this.dx;
		})
		.animate("BirdMovingRight", 0, 0, 1)
		.animate("BirdMovingLeft", 0, 1, 1)
		.onHit('Solid', function() {
             this.dx *= -1;
			 if (this.dx<0) {
				this.stop().animate('BirdMovingLeft', bird_animation_speed, -1);
			 } else {
				this.stop().animate('BirdMovingRight', bird_animation_speed, -1);	 
			 }			 
        });
				
		this.animate('BirdMovingRight', bird_animation_speed, -1);
	},
});

Crafty.c('Bird2', {
	init: function() {
		
		this.dx=3;
		var bird_animation_speed = 10;
		this.requires('Actor, Solid, spr_bird2, Collision, SpriteAnimation, Enemy')		
		.bind('EnterFrame', function() {
			this.x += this.dx;
		})
		.animate("BirdMovingRight", 0, 0, 1)
		.animate("BirdMovingLeft", 0, 1, 1)
		.onHit('Solid', function() {
             this.dx *= -1;
			 if (this.dx<0) {
				this.stop().animate('BirdMovingLeft', bird_animation_speed, -1);
			 } else {
				this.stop().animate('BirdMovingRight', bird_animation_speed, -1);	 
			 }			 
        });
				
		this.animate('BirdMovingRight', bird_animation_speed, -1);
	},
});

Crafty.c('Owl', {
	init: function() {

		this.dx=.3;
		var bird_animation_speed = 0;
		this.requires('Actor, Solid, spr_owl, Collision, SpriteAnimation,Enemy')	
		.animate("BirdMovingRight", 0, 0, 0)
		.animate("BirdMovingLeft", 0, 1, 0)		
		.bind('EnterFrame', function() {
			if ( (this.x<Game.tile_width())||(this.x>5*Game.tile_width()) ) {			
				this.dx *= -1;
				if (this.dx<0) {
					this.stop().animate('BirdMovingLeft', bird_animation_speed, -1);
				 } else {
					this.stop().animate('BirdMovingRight', bird_animation_speed, -1);	 
				 }	
				}				
			this.x += this.dx;
		});
				
		this.animate('BirdMovingRight', bird_animation_speed, -1);
	},
});

Crafty.c('Swan', {
	init: function() {
		tile_inicial=11;
		tile_final=35;
		this.dx=.3;
		var bird_animation_speed = 0;
		this.requires('Actor, Solid, spr_swan, Collision, SpriteAnimation,Enemy')	
		.animate("BirdMovingRight", 0, 0, 0)
		.animate("BirdMovingLeft", 0, 1, 0)		
		.bind('EnterFrame', function() {
			if ( (this.x<Game.tile_width()*tile_inicial)||(this.x>(Game.tile_width()*tile_final )) ) {			
				this.dx *= -1;
				if (this.dx<0) {
					this.stop().animate('BirdMovingLeft', bird_animation_speed, -1);
				 } else {
					this.stop().animate('BirdMovingRight', bird_animation_speed, -1);	 
				 }	
				}				
			this.x += this.dx;
		});
				
		this.animate('BirdMovingRight', bird_animation_speed, -1);
	},
});
Crafty.c('Duck', {
	init: function() {
		
		var bird_animation_speed = 1000;
		this.requires('Actor, Solid, spr_duck, Collision, SpriteAnimation,Enemy')		
		.animate("BirdMovingRight", 0, 0, 1);
				
		this.animate('BirdMovingRight', bird_animation_speed, -1);
	},
});

Crafty.c('FlowerBad', {
	init: function() {
		this.requires('Actor,spr_flor1red, Enemy');
		this.z=100;
	}

});

Crafty.c('Flower2Bad', {
	init: function() {
		this.requires('Actor,spr_flor2red,Enemy');
	}
});

Crafty.c('Flower3Bad', {
	init: function() {
		this.requires('Actor,spr_flor3red,Enemy');
	}
});



/*-----------------------------COLECCIONABLES------------------------------*/
// Un coleccionable es aquello que el jugador debe recoger para competar el juego
Crafty.c('Collectible', {
	init: function() {
		this.requires('Actor');
		this.z=100;
	},

	visit: function() {
		this.destroy();
		Crafty.audio.play('knock',1,0.25);
		Crafty.trigger('FlowerVisited', this);
	}
});

Crafty.c('Sunflower', {
	init: function() {
		this.requires('Collectible, spr_sunflower');
	}
});

Crafty.c('Flower', {
	init: function() {
		this.requires('Collectible, spr_flor1');
		this.z=100;
	}

});

Crafty.c('Flower2', {
	init: function() {
		this.requires('Collectible, spr_flor2');
	}
});

Crafty.c('Flower3', {
	init: function() {
		this.requires('Collectible, spr_flor3');
	}
});




