class FlySpawner {
	constructor(game, numFlies) {
		this.game = game;
		this.flies = [];
		this.numFlies = numFlies;

		this.spawnFlies();
	};

	spawnFlies() {
		for (let i = 0; i < this.numFlies; i++) {
			let fly = new Fly(this.game);
			fly.x = Math.random() * 500;
			fly.y = Math.random() * 400;
			fly.speed = 30 + Math.random() * 50;
			this.flies.push(fly);
		}
	};

	update() {
		this.flies.forEach(fly => fly.update());
	};

	draw(ctx) {
		this.flies.forEach(fly => fly.draw(ctx));
	};
}