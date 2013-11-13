Game = {

	map_grid: {
		width:  30,
		height: 20,
		tile: {
			width:  16,
			height: 16
		}
	},

	tile_width: function() {
		return this.map_grid.tile.width;
	},
	
	tile_height: function() {
		return this.map_grid.tile.height;
	},
	
	width: function() {
		return this.map_grid.width * this.map_grid.tile.width;
	},

	height: function() {
		return this.map_grid.height * this.map_grid.tile.height;
	},


	start: function() {
		Crafty.init(Game.width(), Game.height());
		Crafty.scene('Loading');
	}
}

$text_css = { 'font-size': '24px', 'font-family': 'Arial', 'color': 'black', 'text-align': 'center' }