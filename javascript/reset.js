$(document).ready(function() {
	reset = function(type) {
		camera.x = -Math.floor(g_canvasW/2);
		camera.y = -Math.floor(g_canvasH/2);
		
		options = {
			vectors: false,
			circles: false,
			tracking: {
				t: false,
				id: 0,
				pause: false
			}
		};
	
		balls = [];
		var st = type;
		
		console.log("BEGAN");

		var ballStarters = [{
				x: 0,
				y: 0,
				xs: 0,
				ys: 0,
				c: "#FF0",
				s: 50,
				co: 500,
				m: 40,
				xv: 0,
				yv: 0
			}, {
				x: 0,
				y: 0,
				xs: -100,
				ys: 0,
				c: "#AA7243",
				s: 8,
				co: 500,
				m: "n",
				xv: 0,
				yv: 14.2
			}, {
				x: 0,
				y: 0,
				xs: -200,
				ys: 0,
				c: "#0F0",
				s: 15,
				co: 500,
				m: "n",
				xv: 0,
				yv: 10
			}, {
				x: 0,
				y: 0,
				xs: -300,
				ys: 0,
				c: "#0FF",
				s: 16,
				co: 500,
				m: "n",
				xv: 0,
				yv: 8.156
			}, {
				x: 0,
				y: 0,
				xs: -400,
				ys: 0,
				c: "#8C198C",
				s: 20,
				co: 500,
				m: "n",
				xv: 0,
				yv: 7.08
			}, {
				x: 0,
				y: 0,
				xs: -500,
				ys: 0,
				c: "#4747D1",
				s: 25,
				co: 500,
				m: "n",
				xv: 0,
				yv: 6.33
			}
		];
		console.log(ballStarters);
		console.log(ballStarters.length);
		
		/*if (this.id === 1) {
			this.velo.y = 8.156;
		} else if (this.id === 2) {
			this.velo.y = 10;
		} else if (this.id === 3) {
			this.velo.y = 14.2;
		} else if (this.id === 4) {
			this.velo.y = 7.08;
		} else if (this.id === 5) {
			this.velo.y = 6.33;
		} else if (this.id === 6) {
			this.velo.y = 5.77;
		}*/
		
		if (st === 1) {
			for (var i=0; i<ballStarters.length; i++) {
				var len = balls.length;
				balls[len] = new Ball(
					ballStarters[i].x+ballStarters[i].xs,
					ballStarters[i].y+ballStarters[i].ys,
					ballStarters[i].c,
					ballStarters[i].s,
					ballStarters[i].co);
				if (ballStarters[i].m !== "n") {
					balls[len].mass = ballStarters[i].m;
				}
				balls[len].velo.x = ballStarters[i].xv;
				balls[len].velo.y = ballStarters[i].yv;
			}
		} else if (st === 2) {
			for (var i=0; i<ballStarters.length; i++) {
				var len = balls.length;
				balls[len] = new Ball(
					ballStarters[i].x+ballStarters[i].xs,
					ballStarters[i].y+ballStarters[i].ys,
					ballStarters[i].c,
					ballStarters[i].s,
					ballStarters[i].co);
				if (ballStarters[i].m !== "n") {
					balls[len].mass = ballStarters[i].m;
				}
				balls[len].velo.x = ballStarters[i].xv;
				balls[len].velo.y = ballStarters[i].yv;
			}
			
			for (var i=1; i<ballStarters.length; i++) {
				var len = balls.length;
				balls[len] = new Ball(
					ballStarters[i].x-ballStarters[i].xs,
					ballStarters[i].y-ballStarters[i].ys,
					ballStarters[i].c,
					ballStarters[i].s,
					ballStarters[i].co);
				if (ballStarters[i].m !== "n") {
					balls[len].mass = ballStarters[i].m;
				}
				balls[len].velo.x = -ballStarters[i].xv;
				balls[len].velo.y = -ballStarters[i].yv;
			}
			
			for (var i=1; i<ballStarters.length; i++) {
				var len = balls.length;
				balls[len] = new Ball(
					ballStarters[i].x+ballStarters[i].ys,
					ballStarters[i].y+ballStarters[i].xs,
					ballStarters[i].c,
					ballStarters[i].s,
					ballStarters[i].co);
				if (ballStarters[i].m !== "n") {
					balls[len].mass = ballStarters[i].m;
				}
				balls[len].velo.x = -ballStarters[i].yv;
				balls[len].velo.y = ballStarters[i].xv;
			}
			
			for (var i=1; i<ballStarters.length; i++) {
				var len = balls.length;
				balls[len] = new Ball(
					ballStarters[i].x-ballStarters[i].ys,
					ballStarters[i].y-ballStarters[i].xs,
					ballStarters[i].c,
					ballStarters[i].s,
					ballStarters[i].co);
				if (ballStarters[i].m !== "n") {
					balls[len].mass = ballStarters[i].m;
				}
				balls[len].velo.x = ballStarters[i].yv;
				balls[len].velo.y = -ballStarters[i].xv;
			}
		
		}
		
		/*if (st === 0) { // JUST THERE
			balls[balls.length] = new Ball(Math.round(g_canvasW/2), Math.round(g_canvasH/2), "#ff0", 50, 500);
			balls[balls.length-1].mass = 40; // 22 // 6
			balls[balls.length] = new Ball(Math.round(g_canvasW/2)-300, Math.round(g_canvasH/2), "#0ff", 16, 500) // 16
			balls[balls.length] = new Ball(Math.round(g_canvasW/2)+200, Math.round(g_canvasH/2)-200, "#0f0", 15, 500)
			balls[balls.length] = new Ball(Math.round(g_canvasW/2)+150, Math.round(g_canvasH/2)+400, "#AA7243", 8, 500)
			balls[balls.length] = new Ball(Math.round(g_canvasW/2)-400, Math.round(g_canvasH/2)+300, "#8C198C", 20, 500)
		} else if (st === 1) { // ALIGNED
			balls[balls.length] = new Ball(Math.round(g_canvasW/2), Math.round(g_canvasH/2), "#ff0", 50, 500);
			balls[balls.length-1].mass = 40; // 22 // 6
			balls[balls.length] = new Ball(Math.round(g_canvasW/2)-300, Math.round(g_canvasH/2), "#0ff", 16, 500); // 16
			balls[balls.length-1].velo.y = 8.156;
			balls[balls.length] = new Ball(Math.round(g_canvasW/2)-200, Math.round(g_canvasH/2), "#0f0", 15, 500);
			balls[balls.length-1].velo.y = 10;
			balls[balls.length] = new Ball(Math.round(g_canvasW/2)-100, Math.round(g_canvasH/2), "#AA7243", 8, 500);
			balls[balls.length-1].velo.y = 14.2;
			balls[balls.length] = new Ball(Math.round(g_canvasW/2)-400, Math.round(g_canvasH/2), "#8C198C", 20, 500);
			balls[balls.length-1].velo.y = 7.08;
			balls[balls.length] = new Ball(Math.round(g_canvasW/2)-500, Math.round(g_canvasH/2), "#4747D1", 25, 500); //25
			balls[balls.length-1].velo.y = 6.33;
			
			//balls[balls.length] = new Ball(Math.round(g_canvasW/2)-600, Math.round(g_canvasH/2), "#f9e576", 22, 500);
			
		} else if (st === 2) { // ALIGNED QUAD
			balls[balls.length] = new Ball(Math.round(g_canvasW/2), Math.round(g_canvasH/2), "#ff0", 50, 500);
			balls[balls.length-1].mass = 40; // 22 // 6
			balls[balls.length] = new Ball(Math.round(g_canvasW/2)-300, Math.round(g_canvasH/2), "#0ff", 16, 500); // 16
			balls[balls.length-1].velo.y = 8.156;
			balls[balls.length] = new Ball(Math.round(g_canvasW/2)-200, Math.round(g_canvasH/2), "#0f0", 15, 500);
			balls[balls.length-1].velo.y = 10;
			balls[balls.length] = new Ball(Math.round(g_canvasW/2)-100, Math.round(g_canvasH/2), "#AA7243", 8, 500);
			balls[balls.length-1].velo.y = 14.2;
			balls[balls.length] = new Ball(Math.round(g_canvasW/2)-400, Math.round(g_canvasH/2), "#8C198C", 20, 500);
			balls[balls.length-1].velo.y = 7.08;
			balls[balls.length] = new Ball(Math.round(g_canvasW/2)-500, Math.round(g_canvasH/2), "#4747D1", 25, 500);
			balls[balls.length-1].velo.y = 6.33;
			
			balls[balls.length] = new Ball(Math.round(g_canvasW/2)+300, Math.round(g_canvasH/2), "#0ff", 16, 500); // 16
			balls[balls.length-1].velo.y = -8.156;
			balls[balls.length] = new Ball(Math.round(g_canvasW/2)+200, Math.round(g_canvasH/2), "#0f0", 15, 500);
			balls[balls.length-1].velo.y = -10;
			balls[balls.length] = new Ball(Math.round(g_canvasW/2)+100, Math.round(g_canvasH/2), "#AA7243", 8, 500);
			balls[balls.length-1].velo.y = -14.2;
			balls[balls.length] = new Ball(Math.round(g_canvasW/2)+400, Math.round(g_canvasH/2), "#8C198C", 20, 500);
			balls[balls.length-1].velo.y = -7.08;
			balls[balls.length] = new Ball(Math.round(g_canvasW/2)+500, Math.round(g_canvasH/2), "#4747D1", 25, 500);
			balls[balls.length-1].velo.y = -6.33;
			
			balls[balls.length] = new Ball(Math.round(g_canvasW/2), Math.round(g_canvasH/2)-300, "#0ff", 16, 500); // 16
			balls[balls.length-1].velo.x = -8.156;
			balls[balls.length] = new Ball(Math.round(g_canvasW/2), Math.round(g_canvasH/2)-200, "#0f0", 15, 500);
			balls[balls.length-1].velo.x = -10;
			balls[balls.length] = new Ball(Math.round(g_canvasW/2), Math.round(g_canvasH/2)-100, "#AA7243", 8, 500);
			balls[balls.length-1].velo.x = -14.2;
			balls[balls.length] = new Ball(Math.round(g_canvasW/2), Math.round(g_canvasH/2)-400, "#8C198C", 20, 500);
			balls[balls.length-1].velo.x = -7.08;
			balls[balls.length] = new Ball(Math.round(g_canvasW/2), Math.round(g_canvasH/2)-500, "#4747D1", 25, 500);
			balls[balls.length-1].velo.x = -6.33;
			
			balls[balls.length] = new Ball(Math.round(g_canvasW/2), Math.round(g_canvasH/2)+300, "#0ff", 16, 500); // 16
			balls[balls.length-1].velo.x = 8.156;
			balls[balls.length] = new Ball(Math.round(g_canvasW/2), Math.round(g_canvasH/2)+200, "#0f0", 15, 500);
			balls[balls.length-1].velo.x = 10;
			balls[balls.length] = new Ball(Math.round(g_canvasW/2), Math.round(g_canvasH/2)+100, "#AA7243", 8, 500);
			balls[balls.length-1].velo.x = 14.2;
			balls[balls.length] = new Ball(Math.round(g_canvasW/2), Math.round(g_canvasH/2)+400, "#8C198C", 20, 500);
			balls[balls.length-1].velo.x = 7.08;
			balls[balls.length] = new Ball(Math.round(g_canvasW/2), Math.round(g_canvasH/2)+500, "#4747D1", 25, 500);
			balls[balls.length-1].velo.x = 6.33;
			
		} else if (st === 3) { // OUR SOLAR SYSTEM
			balls[balls.length] = new Ball(Math.round(g_canvasW/2), Math.round(g_canvasH/2), "#ff0", 50, 500);
			balls[balls.length-1].mass = 40;
		}*/
	};
})