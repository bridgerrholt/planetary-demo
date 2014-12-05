$(document).ready(function() {
	getInput = function() {
		g_canvas.onmousedown = function(e){
			if (mbutton.l === false) {
				mbutton.lp = true;
			} else {
				mbutton.lp = false;
			}
			mbutton.l = true;
		};

		g_canvas.onmouseup = function(){
			mbutton.l = false;
		};
		
		$(document).keydown(function(e){
			if (e.which === 32 && keys[32] === false) {
				console.log("SPACE");
				play = !play;
			} else if (e.which === 81 && keys[81] === false) {
				options.vectors = !options.vectors;
			} else if (e.which === 87 && keys[87] === false) {
				options.circles = !options.circles;
			} else if (e.which === 80 && keys[80] === false) {
				frameRate = 200;
				clearInterval(gameLoop);
				gameLoop = setInterval(tick, 1000/frameRate);
			} else if (e.which === 77 && keys[77] === false) {
				reset(1);
				console.log("reset");
			} else if (e.which === 78 && keys[78] === false) {
				reset(2);
				console.log("reset");
			} else if (e.which === 49 && keys[49] === false) {
				menu.menus[0].active = !menu.menus[0].active;
			}

			if (!keys[e.which]) {
				keys[e.which] = true;
			}
		})
		
		$(document).keyup(function(e){
			keys[e.which] = false;
			if (e.which === 80 && keys[80] === false) {
				frameRate = 60;
				clearInterval(gameLoop);
				gameLoop = setInterval(tick, 1000/frameRate);
			}
		})
	};
})