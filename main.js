const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./flies.png");
ASSET_MANAGER.queueDownload("./hand.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new FlySpawner(gameEngine, 10, 1500));
	gameEngine.addEntity(new Swatter(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
