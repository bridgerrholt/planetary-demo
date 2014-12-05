$(document).ready(function() {
	var lastLoop = new Date;
	tick = function() {
		var thisLoop = new Date;
		var fps = 1000/(thisLoop-lastLoop);
		
		g_canvas.width = window.innerWidth;
		g_canvas.height = window.innerHeight;
		g_canvasW = $("#canvas").width();
		g_canvasH = $("#canvas").height();
		
		//getInput();

		//tools.update();

		//console.log("ball loop STARTING");
		for (var i=0; i<balls.length; i++) {
			//console.log(i);
			balls[i].update();
		}
		//console.log(balls);

		menu.update();
		draw();
		camera.update();
		
		g_ctx.fillStyle = "white";
		g_ctx.font = "10px Georgia";
		g_ctx.fillText("FPS: " + String(fps), 1, 61);
		
		
		
		lastLoop = thisLoop;
		mbutton.lp = false;
	};
})