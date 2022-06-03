
// You can write more code here

/* START OF COMPILED CODE */

class Ship extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "ShipOne", frame);

		/* START-USER-CTR-CODE */
		this.scene.events.on("create",()=> this.create());

		/* END-USER-CTR-CODE */
	}

	/** @type {LaserBase} */
	laserTarget = this.scene.laserBase;
	/** @type {number} */
	bounceTime = 3000;
	/** @type {number} */
	shipVelocity = 100;
	/** @type {number} */
	fireDelay = 1000;

	/* START-USER-CODE */

	create(){
	this.scene.physics.world.enableBody(this);
	this.Ydirection=1;
	this.beginFly();
	this.beginFire();

	}

	beginFly(){

		this.body.velocity.y=this.shipVelocity*this.Ydirection;

		this.oscilatingTimer = this.scene.time.addEvent({
			delay: this.bounceTime,                // ms
			callback: function(){
				this.body.velocity.y=this.shipVelocity*this.Ydirection;
				this.Ydirection*=-1;
			},
			callbackScope: this,
			loop: true
		});


	}

	beginFire(){

		this.firingTimer = this.scene.time.addEvent({
			delay: this.fireDelay,                // ms
			callback: function(){

				this.laserTarget.y=this.y;
				this.laserTarget.x=this.x+this.width;
				this.laserTarget.fire();
			},
			callbackScope: this,
			loop: true
		});
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
