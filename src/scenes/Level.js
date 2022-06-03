
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background1
		const background1 = this.add.tileSprite(0, 0, 64, 64, "background");
		background1.setOrigin(0, 0);

		// ship
		const ship = new Ship(this, 141, 52);
		this.add.existing(ship);

		// laserBase
		const laserBase = new LaserBase(this, 248, 303);
		this.add.existing(laserBase);

		// enemy1
		const enemy1 = new Enemy1(this, 667, 319);
		this.add.existing(enemy1);

		// ship (prefab fields)
		ship.laserTarget = laserBase;
		ship.fireDelay = 1500;

		// laserBase (prefab fields)
		laserBase.beamThickness = 5;
		laserBase.beamColor = "0x81F6F1";
		laserBase.beamColor2 = "0xFA2E5E";

		this.background1 = background1;
		this.laserBase = laserBase;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	background1;
	/** @type {LaserBase} */
	laserBase;

	/* START-USER-CODE */

	// Write more your code here

	create() {


		this.editorCreate();
		this.background1.width=document.body.clientWidth;
		this.background1.height=document.body.clientHeight;
		this.enemies=[];

	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
