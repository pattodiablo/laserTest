
// You can write more code here

/* START OF COMPILED CODE */

class LaserBase extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "laserBase", frame);

		/* START-USER-CTR-CODE */
		this.scene.events.on("create",()=> this.create());
		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	beamThickness = 1;
	/** @type {string} */
	beamColor = "0xf92209";
	/** @type {string} */
	beamColor2 = "0xFFFFFF";

	/* START-USER-CODE */

	create(){

		this.scene.physics.world.enableBody(this);
		this.visible=false;

	}
	fire(){

		this.visible=true;
		this.play("blastOrigin",true);
		this.beam1 = this.scene.add.rectangle(this.x, this.y, this.scene.cameras.main.width, this.beamThickness, Number(this.beamColor));
		this.scene.physics.world.enableBody(this.beam1);
		this.scene.physics.add.overlap(this.scene.enemies,this.beam1,this.hitEnemy);
		this.beam1.lineWidth=2;
		this.beam1.strokeColor=this.beamColor;
		this.beam1.setOrigin(0,0.5);
		this.beam1.holder=this;
		this.depth=1;
		this.beam1.setDepth(this.depth-1)

		this.beamAnim = this.scene.tweens.createTimeline();

		this.beamAnim.add({
			targets: this.beam1,
			alpha: { from: 0, to: 1 },
			ease: 'Linear',      
			fillColor: this.beamColor2, 
			duration: 50,
			repeat: 2,           
			yoyo: true,
		});

		this.beamAnim.add({
			targets: this.beam1,
			scaleX: 0,  
			scaleY: 0,  
			duration: 50,
			repeat: 0,           

		});

		this.beamAnim.add({
			targets: this.beam1,
			scaleX: 1,
			scaleY: 1, 
			ease: 'Sine.easeInOut',       
			duration: 100,
			repeat: 0,           

		});


		this.beamAnim.add({
			targets: this.beam1,
			alpha: { from: 0, to: 1 },
			ease: 'Linear',       
			duration: 300,
			repeat: 0,           
			yoyo: true,
			calllbackScope:this,
			onComplete: function(){
				this.targets[0].holder.visible=false;
				this.targets[0].destroy();


			}
		});

		this.beamAnim.play();

	}

	hitEnemy(enemy,laser){
		enemy.doDamage();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
