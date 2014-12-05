$(document).ready(function() {
	camera = {
		x: -Math.floor(g_canvasW/2),
		y: -Math.floor(g_canvasH/2),
		org: {
			x: 0,
			y: 0
		}
	};
	
	camera.update = function() {
		if (keys[16]) {
			camera.org = {
				x: Math.floor(g_canvasW/2),
				y: Math.floor(g_canvasH/2)
			};
			
			options.tracking.t = false;
			options.tracking.pause = false;
			
			camera.move();
		} else if (options.tracking.t) {
			if (options.tracking.pause) {
				camera.move();
			} else {
				camera.x = Math.floor(balls[options.tracking.id].x)-Math.floor(g_canvasW/2);
				camera.y = Math.floor(balls[options.tracking.id].y)-Math.floor(g_canvasH/2);
			}
		}
	};
	
	camera.move = function() {
		var speed = pointDis(camera.org.x, camera.org.y, mouse.x, mouse.y)*0.05;
		if (speed > 15) {
			speed = 15;
		}
		
		var newCamera = disDir(
			camera.x, camera.y,
			speed,
			pointDir(camera.org.x, camera.org.y, mouse.x, mouse.y));
		
		//console.log(newCamera.x);
		camera.x = newCamera.x;
		camera.y = newCamera.y;
		
		g_ctx.beginPath();
		g_ctx.strokeStyle = "#f0f";
		g_ctx.moveTo(camera.org.x, camera.org.y);
		g_ctx.lineTo(mouse.x, mouse.y);
		g_ctx.stroke();
		g_ctx.closePath();
	};
})