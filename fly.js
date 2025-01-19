class Fly {
	constructor(game) {
		this.game = game;
		this.animator = new Animator(ASSET_MANAGER.getAsset("./flies.png"), 0, 0, 65, 80, 9, 1);

		this.x = 200;
		this.y = 300;
		this.speed = 50;
	};

	update() {
		this.x += this.speed*this.game.clockTick;
		if(this.x > 1024) this.x = 0;
	};

	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
		//ctx.drawImage(ASSET_MANAGER.getAsset("./PngItem_2222200.png"),0,0)
	};
}