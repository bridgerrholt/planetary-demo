$(document).ready(function() {
	draw = function() {
		g_ctx.fillStyle = "black";
		g_ctx.fillRect(0, 0, g_canvasW, g_canvasH);
		g_ctx.fillStyle = "white";
		//g_ctx.fillRect(mouse.x-2, mouse.y-2, 5, 5);

		var s = 64;
		for (var y=-1; y<Math.floor(g_canvasH/s)+2; y++) {
			for (var x=-1; x<Math.floor(g_canvasW/s)+2; x++) {
				//g_ctx.strokeStyle = "#222";
				//g_ctx.strokeRect(x*s-camera.x%s, y*s-camera.y%s, s, s);
				g_ctx.drawImage(background, Math.round(x*s-camera.x%s), Math.round(y*s-camera.y%s));
			}
		}
		
		for (var i=0; i<balls.length; i++) {
			balls[i].draw();
		}

		g_ctx.save();
		g_ctx.translate(0.5, 0.5);

		/*float xDiff = p2.X - p1.X;
		float yDiff = p2.Y - p1.Y;
		return Math.Atan2(yDiff, xDiff) * (180 / Math.PI);*/

		var xDiff = mouse.x-20;
		var yDiff = mouse.y-20;
		var speed = Math.sqrt(
			Math.pow(xDiff, 2) +
			Math.pow(yDiff, 2));
		var direction = Math.atan2(yDiff, xDiff) * (180 / Math.PI);

		menu.draw();

		g_ctx.fillStyle = "white";
		g_ctx.font = "10px Georgia";
		g_ctx.fillText("Speed: " + String(speed), 1, 21);
		g_ctx.fillText("Direc: " + String(direction), 1, 41);
		g_ctx.fillText("Acc: " + String(balls[1].acc.x), 1, 81);
		g_ctx.fillText("Velo: " + String(balls[1].velo.x), 1, 101);
		g_ctx.fillText("Camera x: " + String(camera.x), 1, 121);
		g_ctx.fillText("Camera y: " + String(camera.y), 1, 141);
		g_ctx.fillText("Point to mouse: " + String(pointDir(g_canvasW/2, g_canvasH/2, mouse.x, mouse.y)), 1, 161);
		g_ctx.fillText("Tracking: " + String(options.tracking.t) + "," + String(options.tracking.id) + "," + String(options.tracking.pause), 1, 181);
		
		g_ctx.restore();
	}
})