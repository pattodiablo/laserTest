
// You can write more code here

/* START OF COMPILED CODE */

class Explotion1 extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "explosion", frame ?? "EXP_04.png");

		/* START-USER-CTR-CODE */
		this.scene.events.on("create",()=> this.create());
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

		create(){
			
		}

		blast(){
			this.play("blast1",false);
		}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
