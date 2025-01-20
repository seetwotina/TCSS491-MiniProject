class Fly {
	constructor(game) {
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./flies.png"), 0, 0,
			65, 80, 9, .2);
		this.x = Math.random() * 500;
		this.y = Math.random() * 400;
		this.speed = 100;
	};

	update() {
		this.x += this.speed*this.game.clockTick;
		if(this.x > 500) {
			this.x = Math.random() * 500;
			this.y = Math.random() * 500;
		}
	};

	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
		//ctx.drawImage(ASSET_MANAGER.getAsset("./PngItem_2222200.png"),0,0)
	};
}