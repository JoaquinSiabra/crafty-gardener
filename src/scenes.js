
// Escena principal del juego
Crafty.scene('Game', function() {
		
	mapa = new Array(Game.map_grid.width);
	mapa = [	['T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T','T'],	
				['T','V','V','V','V','V','V','X','K','V','V','V','V','X','R','X','R','V','F','V','V','V','V','V','V','K','F','V','V','T'],	
				['T','V','V','V','V','V','V','V','V','F','V','V','V','V','X','V','V','V','V','V','V','V','V','V','X','V','V','V','V','T'],	
				['T','V','O','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','X','V','V','V','T'],	
				['T','S','V','V','V','V','V','V','F','V','B','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','T'],		
				['T','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','T'],		
				['T','R','V','V','R','V','V','V','V','V','V','V','V','V','V','V','V','V','V','R','V','V','V','V','V','R','V','V','V','T'],	
				['T','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','F','V','V','V','V','V','V','V','V','V','V','V','V','T'],		
				['T','V','V','V','V','V','V','V','R','V','V','V','V','V','V','V','K','V','V','V','V','G','V','V','V','V','V','V','V','T'],		
				['T','V','V','F','V','V','V','V','V','V','V','V','V','V','V','X','V','V','V','V','V','V','V','V','V','V','V','V','V','T'],		
				['T','V','V','K','V','V','V','B','V','V','V','V','R','V','V','V','V','V','V','V','V','V','V','V','Z','3','3','3','3','T'],	
				['T','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','K','X','V','V','V','V','F','R','V','V','R','V','V','T'],		
				['T','V','V','V','X','V','V','V','V','V','R','V','V','V','V','F','V','V','V','V','V','V','V','V','V','V','V','V','V','T'],		
				['T','V','V','K','V','V','V','V','P','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','T'],		
				['T','V','V','V','V','V','V','V','R','V','V','V','V','V','V','V','K','V','R','V','V','V','V','V','V','V','V','V','V','T'],		
				['T','V','V','V','X','V','V','V','V','V','V','V','V','V','V','X','V','V','V','V','V','V','V','V','R','V','V','V','V','T'],		
				['T','V','F','K','V','V','F','V','D','V','V','V','V','V','V','V','V','F','V','V','C','V','V','V','V','V','V','V','V','T'],		
				['T','V','V','V','V','V','K','V','V','V','V','V','V','V','V','V','K','V','V','V','V','R','V','V','V','V','V','V','V','T'],		
				['T','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','V','H','V','Y','V','H','V','H','V','V','V','T'],	
				['T','T','T','T','T','T','T','T','T','T','T','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','T']					
			];


	for (var i = 0; i < mapa.length; i++) {
		for (var j = 0; j < mapa[0].length; j++) {

			if (mapa[i][j] == 'P') {
				Crafty.e('PlayerCharacter').at(j, i);
			} 
			if (mapa[i][j] == 'T') {
				Crafty.e('Tree').at(j, i);
			} 
			if (mapa[i][j] == 'W') {
				Crafty.e('Water').at(j, i);
			} 
			if (mapa[i][j] == 'K') {
				Crafty.e('Trunk').at(j, i);
			}	
			if (mapa[i][j] == 'R') {
				Crafty.e('Branch').at(j, i);
			}	
			if (mapa[i][j] == 'F') {
				Crafty.e('Flower').at(j, i);
			}	
			if (mapa[i][j] == 'X') {
				Crafty.e('FlowerBad').at(j, i);
			}	
			if (mapa[i][j] == 'S') {
				Crafty.e('Sunflower').at(j, i);
			}	
			if (mapa[i][j] == 'H') {
				Crafty.e('Flower2').at(j, i);
			}	
			if (mapa[i][j] == 'Y') {
				Crafty.e('Flower2Bad').at(j, i);
			}	
			if (mapa[i][j] == '3') {
				Crafty.e('Flower3').at(j, i);
			}	
			if (mapa[i][j] == 'Z') {
				Crafty.e('Flower3Bad').at(j, i);
			}	
			if (mapa[i][j] == 'B') {
				Crafty.e('Bird').at(j, i);
			}	
			if (mapa[i][j] == 'G') {
				Crafty.e('Bird2').at(j, i);
			}	
			if (mapa[i][j] == 'O') {
				Crafty.e('Owl').at(j, i);
			}
			if (mapa[i][j] == 'C') {
				Crafty.e('Swan').at(j, i);
			}
			if (mapa[i][j] == 'D') {
				Crafty.e('Duck').at(j, i);
			}
			
		}
	}

	Crafty.audio.play('musica',-1,0.15);

	// Establecemos la condicion de final de juego: que no queden coleccionables pendientes
	this.show_victory = this.bind('FlowerVisited', function() {
		if (!Crafty('Collectible').length) {
			Crafty.scene('Victory');
		}
	});
}, function() {
	// Eliminamos el event binding para que no se acumulen los escuchadores
	// de eventos tras varios reinicios del juego
	this.unbind('FlowerVisited', this.show_victory);
});


// Escena de final
Crafty.scene('Victory', function() {

	Crafty.e('2D, DOM, Text')
		.text('Estupendo!')
		.attr({ x: 0, y: Game.height()/2 - 24, w: Game.width() })
		.css($text_css);
	Crafty.audio.play('applause',1,0.5);

	var delay = true;
	setTimeout(function() { delay = false; }, 3000);
	this.restart_game = Crafty.bind('KeyDown', function() {
		if (!delay) {
			Crafty.scene('Game');
		}
	});
}, function() {
	// Eliminamos el event binding para que no se acumulen los escuchadores
	// de eventos tras varios reinicios del juego
	this.unbind('KeyDown', this.restart_game);
});

// Escena de carga
// -------------
// Solo se visualiza si los ficheros de sprites y audio tardan en cargarse
Crafty.scene('Loading', function(){

	Crafty.e('2D, DOM, Text')
		.text('Loading; please wait...')
		.attr({ x: 0, y: Game.height()/2 - 24, w: Game.width() })
		.css($text_css);

	Crafty.load([
		'assets/rama-54x32.png',
		'assets/tronco-32x54.png',
		'assets/hunter.png',
		'assets/owl-36x29.png',
		'assets/swan-60x53.png',
		'assets/duck-48x48.png',
		'assets/matorral-16x16.png',
		'assets/water-16x16.png',
		'assets/bird-34x18.png',
		'assets/bird3t-32x18.png',
		'assets/bee_32.png',
		'assets/flor1-32x32.png',
		'assets/flor2-32x19.png',
		'assets/flor3-22x32.png',
		'assets/flor1red-32x32.png',
		'assets/flor2red-32x19.png',
		'assets/flor3red-22x32.png',
		'assets/applause.mp3',
		'assets/welldone.mp3',
		'assets/Chibi_Ninja.mp3',
		'assets/damage.mp3'
		], function(){
			
		Crafty.sprite(34,18, 'assets/bird-34x18.png', {
			spr_bird:    [0, 0]
		});
		Crafty.sprite(32,18, 'assets/bird3t-32x18.png', {
			spr_bird2:    [0, 0]
		});
		Crafty.sprite(36,58, 'assets/owl-36x58.png', {
			spr_owl:    [0, 0]
		});
		Crafty.sprite(60,53, 'assets/swan-60x53.png', {
			spr_swan:    [0, 0]
		});
		Crafty.sprite(48,48, 'assets/duck-48x48.png', {
			spr_duck:    [0, 0]
		});
		Crafty.sprite(16,16, 'assets/matorral-16x16.png', {
			spr_tree:    [0, 0]
		});
		Crafty.sprite(16,16, 'assets/water-16x16.png', {
			spr_water:    [0, 0]
		});
		Crafty.sprite(24,40, 'assets/sunflower-24x40.png', {
			spr_sunflower:    [0, 0]
		});
		Crafty.sprite(32,32, 'assets/flor1-32x32.png', {
			spr_flor1:    [0, 0]
		});		
		Crafty.sprite(32,19, 'assets/flor2-32x19.png', {
			spr_flor2:    [0, 0]
		});
		Crafty.sprite(22,32, 'assets/flor3-22x32.png', {
			spr_flor3:    [0, 0]
		});
		Crafty.sprite(32,32, 'assets/flor1red-32x32.png', {
			spr_flor1red:    [0, 0]
		});		
		Crafty.sprite(32,19, 'assets/flor2red-32x19.png', {
			spr_flor2red:    [0, 0]
		});
		Crafty.sprite(22,32, 'assets/flor3red-22x32.png', {
			spr_flor3red:    [0, 0]
		});
		Crafty.sprite(32,54, 'assets/tronco-32x54.png', {
			spr_trunk:    [0, 0]
		});
		Crafty.sprite(54,32, 'assets/rama-54x32.png', {
			spr_branch:    [0, 0]
		});
	
		Crafty.sprite(16, 'assets/hunter.png', {
			spr_player:  [0, 2],
		}, 0, 2);


		Crafty.audio.add({
			knock: 	  ['assets/welldone.mp3'],
			applause: ['assets/applause.mp3'],
			musica:   ['assets/Chibi_Ninja.mp3'],
			damage:   ['assets/damage.mp3']
		});

		Crafty.scene('Game');
	})
});