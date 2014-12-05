$(document).ready(function() {
	Ball = function(x, y, color, radius, attractiveCoeff) {
		this.free = true;
		this.id = balls.length;
		this.xStart = x;
		this.yStart = y;
		this.x = x;
		this.y = y;
		this.d = 0;
		this.color = color;
		this.radius = radius;
		this.width = radius*2;
		this.attractiveCoeff = attractiveCoeff; //500
		this.mass = this.radius/8;
		this.disp = new Vector(this.x, this.y);
		this.velo = new Vector(0, 0);
		this.acc = new Vector(0, 0);
		this.press = {
			t: false,
			x: 0,
			y: 0
		};
		this.vPress = {
			t: false,
			x: 0,
			y: 0
		};
		
		
	};
	
	Ball.prototype.update = function() {
		if (keys[88] && mbutton.l) {
			if (mbutton.lp && pointDis(this.x, this.y, mouse.x+camera.x, mouse.y+camera.y) < this.radius) {
				options.tracking.t = true;
				options.tracking.id = this.id;
				camera.x = this.x-Math.floor(g_canvasW/2);
				camera.y = this.y-Math.floor(g_canvasH/2);
			}
		}
		
		if (this.id != 0) {
			if (play) {
				this.attractedTo(balls[0]);
				//console.log("attractedTo DONE");
				if (this.collisionInto(balls[0])) {
					this.repelledBy(balls[0]);
					//console.log("repelledBy DONE");
				}
				//console.log("collisionInto DONE");
				
				for (var i=0; i<balls.length; i++) {
					if (balls[i].id != this.id) {
						//this.attractedTo(balls[i]);
						if (this.collisionInto(balls[i])) {
							this.repelledBy(balls[i]);
						}
					}
				}
				
				//console.log("f");
				//console.log(this.disp);
				this.setPosition(this.disp);
				//console.log("setPosition DONE");
			} else {
				this.vGrab();
				this.grab();
			}
		} else {
			//this.x -= 1;
			/*var v = disDir(this.x, this.y, 0.1, this.d);
			this.x = v.x;
			this.y = v.y;
			this.d += 0.01;*/
			this.grab();
		}
	};

	Ball.prototype.grab = function() {
		if (mbutton.l) {
			if (!keys[90] && !keys[88]) {
				if (this.press.t) {
					this.x = mouse.x-this.press.x+camera.x;
					this.y = mouse.y-this.press.y+camera.y;
					this.disp.x = mouse.x-this.press.x+camera.x;
					this.disp.y = mouse.y-this.press.y+camera.y;
				} else {
					console.log(pointDis(this.x, this.y, mouse.x, mouse.y));
					if (mbutton.lp && pointDis(this.x, this.y, mouse.x+camera.x, mouse.y+camera.y) < this.radius) {
						if (options.tracking.t && options.tracking.id === this.id) {
							options.tracking.pause = true;
							camera.org.x = Math.round(mouse.x);
							camera.org.y = Math.round(mouse.y);
						}
						this.press.t = true;
						this.press.x = mouse.x-this.x+camera.x;
						this.press.y = mouse.y-this.y+camera.y;
					}
				}
			}
		} else {
			if (this.press.t) {
				this.press.t = false;
				if (options.tracking.pause && options.tracking.id === this.id) {
					options.tracking.pause = false;
				}
			}
		}
	};

	Ball.prototype.vGrab = function() {
		if (mbutton.l) {
			if (keys[90]) {
				if (this.vPress.t) {
					this.velo.x = (mouse.x-this.vPress.x+camera.x-this.x)/15;
					this.velo.y = (mouse.y-this.vPress.y+camera.y-this.y)/15;
				} else {
					console.log(pointDis(this.velo.x, this.velo.y, mouse.x, mouse.y));
					if (mbutton.lp && pointDis(this.x+this.velo.x*15, this.y+this.velo.y*15, mouse.x+camera.x, mouse.y+camera.y) <= 10) {
						this.vPress.t = true;
						this.vPress.x = mouse.x-(this.x+this.velo.x*15)+camera.x;
						this.vPress.y = mouse.y-(this.y+this.velo.y*15)+camera.y;
					}
				}
			}
		} else {
			if (this.vPress.t) {
				this.vPress.t = false;
			}
		}
	};
	
	Ball.prototype.getForceAttract = function(m1, m2, vec2Center) {
		var numerator = this.attractiveCoeff*m1*m2;
		var denominator = Math.pow(vec2Center.getMagnitude(), 2);
		var forceMagnitude = numerator/denominator;
		var forceDirection = vec2Center.getAngle();
		
		if (forceMagnitude > 8) forceMagnitude = 8;
		
		var forceX = forceMagnitude*Math.cos(forceDirection);
		var forceY = forceMagnitude*Math.sin(forceDirection);
		var force = new Vector(forceX, forceY);
		return force;
	};
	
	Ball.prototype.getAcc = function(vecForce) {
		vecForce.multiply(1/this.mass)
		var vecAcc = new Vector(vecForce.x, vecForce.y);
		return vecAcc;
	};

	Ball.prototype.getDispTo = function(ball) {
		var currentVector = new Vector(ball.x, ball.y);
		currentVector.minusVector(this.disp);
		return currentVector;
	};
	
	Ball.prototype.attractedTo = function(ball) {
		var toCenter = this.getDispTo(ball);
		//console.log("C");
		//console.log(this.acc);
		var currentForceAttract = this.getForceAttract(ball.mass, this.mass, toCenter);
		//console.log(this.acc);
		this.acc = this.getAcc(currentForceAttract);
		//console.log("A");
		//console.log(this.acc);
		/*console.log(toCenter);
		console.log(currentForceAttract);
		console.log(this.acc);*/
		this.velo.addVector(this.acc);
		//console.log(this.disp);
		this.disp.addVector(this.velo);
	};

	Ball.prototype.setPosition = function(vecDisp) {
		
		this.x = Math.round(vecDisp.x);
		this.y = Math.round(vecDisp.y);
	};
	
	Ball.prototype.collisionInto = function(ball) {
		var hit = false;
		var minDist = (ball.width+this.width)/2;
	 
		if (this.getDispTo(ball).getMagnitude() < minDist) {
			hit = true;
		}
	 
		return hit;
	};
	
	Ball.prototype.getRepel = function(ball) {
		var minDist = (ball.width+this.width)/2;
		
		var toBall = this.getDispTo(ball);
		var directToBall = toBall.getVectorDirection();
		directToBall.multiply(minDist);
		directToBall.minusVector(toBall);
		directToBall.multiply(-1);
		return directToBall;
	}
	
	Ball.prototype.repelledBy = function(ball) {
		this.acc.reset();
		this.velo.reset();
		
		//this.velo.minusVector(ball.acc);
		
		var repelDisp = this.getRepel(ball);
		//console.log(this.disp);
		this.disp.addVector(repelDisp);
	}
	
	Ball.prototype.draw = function() {
		if (options.circles) {
			g_ctx.beginPath();
			g_ctx.arc(balls[0].x-camera.x, balls[0].y-camera.y, Math.abs(this.xStart-balls[0].xStart), 0, 2 * Math.PI, false);
			g_ctx.lineWidth = 2;
			g_ctx.strokeStyle = "#ffffff";
			g_ctx.stroke();
			g_ctx.closePath();
			
			g_ctx.beginPath();
			g_ctx.arc(balls[0].x-camera.x, balls[0].y-camera.y, Math.round(pointDis(this.x, this.y, balls[0].x, balls[0].y)), 0, 2 * Math.PI, false);
			//g_ctx.arc(balls[0].x-camera.x, balls[0].y-camera.y, 5, 0, 2 * Math.PI, false);
			g_ctx.lineWidth = 2;
			g_ctx.strokeStyle = "#f00";
			g_ctx.stroke();
			g_ctx.closePath();
			
			/*drawCircle(balls[0].x-camera.x, balls[0].y-camera.y, Math.abs(this.xStart-balls[0].xStart), "#fff", 2)
			drawCircle(balls[0].x-camera.x, balls[0].y-camera.y, Math.round(pointDis(this.x, this.y, balls[0].x, balls[0].y)), "#f00", 2)*/
		}
		
		g_ctx.beginPath();
		//g_ctx.arc(Math.round(this.x-camera.x), Math.round(this.y-camera.y), this.radius, 0, 2 * Math.PI, false);
		g_ctx.arc(this.x-camera.x, this.y-camera.y, this.radius, 0, 2 * Math.PI, false);
		g_ctx.fillStyle = this.color;
		g_ctx.fill();
		/*g_ctx.lineWidth = 2;
		g_ctx.strokeStyle = "#ffffff";
		g_ctx.stroke();*/
		g_ctx.closePath();
		
		
		if (this.id != 0 && (options.vectors || !play)) {
			lineEnd = new Vector(this.x, this.y)
			lineAdd = new Vector(this.velo.x, this.velo.y);
			lineAdd.multiply(15);
			lineEnd.addVector(lineAdd);
			
			g_ctx.beginPath();
			g_ctx.strokeStyle = "#fff";
			g_ctx.moveTo(this.x-camera.x, this.y-camera.y);
			g_ctx.lineTo(lineEnd.x-camera.x, lineEnd.y-camera.y);
			g_ctx.stroke();
			g_ctx.closePath();
			
			lineEnd = new Vector(this.x, this.y)
			lineAdd = new Vector(this.acc.x, this.acc.y);
			lineAdd.multiply(15);
			lineEnd.addVector(lineAdd);
			
			g_ctx.beginPath();
			g_ctx.strokeStyle = "#fff";
			g_ctx.moveTo(this.x-camera.x, this.y-camera.y);
			g_ctx.lineTo(lineEnd.x-camera.x, lineEnd.y-camera.y);
			g_ctx.stroke();
			g_ctx.closePath();
		}
	};
})

















