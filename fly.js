class Fly {
	constructor(game) {
		this.game = game;
		this.x = 0;
		this.y = 0;
	};

	update() {
		this.x += this.speed*this.game.clockTick;
		if(this.x > 1024) this.x = 0;
	};

	draw(ctx) {
		//this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
		ctx.drawImage(ASSET_MANAGER.getAsset("./flies.png"),0,0)
	};
}