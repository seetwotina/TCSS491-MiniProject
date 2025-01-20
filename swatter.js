class Swatter {
	constructor(game) {
		this.game = game;
		this.x = 500; // Initial x position
		this.y = 275; // Initial y position
		this.isDragging = false; // Flag for dragging
		this.offsetX = 0; // Mouse offset when dragging
		this.offsetY = 0; // Mouse offset when dragging

		this.isPressed = false;
	};

	update() {
		if (this.isDragging) {
			this.x = this.game.move.x - this.offsetX;
			this.y = this.game.move.y - this.offsetY;
		}
	};

	draw(ctx) {
		ctx.drawImage(ASSET_MANAGER.getAsset("./hand.png"),this.x,this.y)
	};

	startDragging(mouseX, mouseY) {
		if (mouseX >= this.x && mouseX <= this.x + 325 && mouseY >= this.y && mouseY <= this.y + 350) {
			this.isDragging = true;
			this.offsetX = mouseX - this.x;
			this.offsetY = mouseY - this.y;
		}
	};

	stopDragging() {
		this.isDragging = false;
	};

	startSpace() {
		if (this.isDragging) {
			this.isPressed = true;
		}
	};
}