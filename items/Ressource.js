function Ressource(x, y){

	this.sprite;
	this.x = x;
	this.y = y; 

	this.Awake = function(){
		
		this.sprite = game.add.sprite(this.x, this.y, 'ressource');
		game.physics.arcade.enable(this.sprite);
	}

	this.Awake();
}