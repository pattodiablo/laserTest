
// You can write more code here

/* START OF COMPILED CODE */

class Enemy1 extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "enemy1", frame);

		/* START-USER-CTR-CODE */
		this.scene.events.on("create",()=> this.create());
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

		create(){
			this.scene.physics.world.enableBody(this);
			this.scene.enemies.push(this)
			this.isHitted=false;
		}

		doDamage(){
	


		
		if(!this.isHitted){

			//doing damage
			this.isHitted=true;
			const eplotion1 = new Explotion1(this.scene, this.x, this.y);	
			this.scene.add.existing(eplotion1);
			eplotion1.blast();


			//reset ship
			this.hitAnim = this.scene.tweens.createTimeline();
			this.hitAnim.add({
				targets: this,
				alpha: 0.5,
				ease: 'Linear',      
				duration: 200,
				repeat: 2,           
				yoyo: true,
				calllbackScope:this,
				onComplete: function(){
			
					this.targets[0].isHitted=false
				}
				
			},this);
	
			this.hitAnim.play();

		}
		
		}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
