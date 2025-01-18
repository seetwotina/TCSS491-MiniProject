class Swatter {
	constructor(game, fly) {
		this.game = game;
		this.fly = fly;

		this.x = 500; // Initial x position
		this.y = 275; // Initial y position
		this.isDragging = false; // Flag for dragging
		this.offsetX = 0; // Mouse offset when dragging
		this.offsetY = 0; // Mouse offset when dragging
	};

	update() {
		if (this.isDragging) {
			this.x = this.game.move.x - this.offsetX;
			this.y = this.game.move.y - this.offsetY;
		}
	};

	draw(ctx) {
		//this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
		ctx.drawImage(ASSET_MANAGER.getAsset("./hand.png"),this.x,this.y)
	};

	startDragging(mouseX, mouseY) {
		if (mouseX >= this.x && mouseX <= this.x + 325 && mouseY >= this.y && mouseY <= this.y + 325) {
			this.isDragging = true;
			this.offsetX = mouseX - this.x;
			this.offsetY = mouseY - this.y;
		}
	};

	stopDragging() {
		this.isDragging = false;
		this.x = 500;
		this.y = 275;
	};
}