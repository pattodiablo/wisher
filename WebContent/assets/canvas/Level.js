
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * Level.
 */
function Level() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Level_proto = Object.create(Phaser.State.prototype);
Level.prototype = Level_proto;
Level.prototype.constructor = Level;

Level.prototype.init = function () {
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.stage.backgroundColor = '#ffffff';
	
};

Level.prototype.preload = function () {
	
	this.load.pack('images', 'assets/pack.json');
	
};

Level.prototype.create = function () {
	var _building = this.add.sprite(578.0, 477.0, 'building1');
	_building.scale.set(0.5, 0.5);
	
	
	
};

/* --- end generated code --- */
// -- user code here --
