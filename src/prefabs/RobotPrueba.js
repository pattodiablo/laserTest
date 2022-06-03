
// You can write more code here

/* START OF COMPILED CODE */

class RobotPrueba extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "playerAnimations", frame ?? "death instancia 10000");

		/* START-USER-CTR-CODE */
		this.scene.events.on("create",()=> this.create());
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	create(){
		
		this.scene.physics.world.enableBody(this);
		this.body.velocity.y=90;
		
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
