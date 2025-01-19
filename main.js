const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./hand.png");
ASSET_MANAGER.queueDownload("./flies.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	const fly = new Fly(gameEngine);

	gameEngine.addEntity(fly);
	gameEngine.addEntity(new Swatter(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
