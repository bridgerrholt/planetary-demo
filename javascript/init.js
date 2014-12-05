$(document).ready(function() {
	init = function() {
		frameRate = 60;

		/*g_canvas = $("#canvas")[0];
		g_ctx = g_canvas.getContext("2d");
		g_canvasW = $("#canvas").width();
		g_canvasH = $("#canvas").height();*/

		g_canvas = document.getElementById('canvas'),
		g_ctx = g_canvas.getContext('2d');
		g_canvas.width = window.innerWidth;
		g_canvas.height = window.innerHeight;
		//g_canvas.css("z-index", 0);
		$("#canvas").css("z-index", 0);
		g_canvasW = $("#canvas").width();
		g_canvasH = $("#canvas").height();
		console.log(g_ctx);
		
		document.addEventListener('mousemove', function(evt) {
			var mouse2 = getMousePosition(g_canvas, evt);
			mouse.x = mouse2.x;
			mouse.y = mouse2.y;
			var message = 'Mouse position: ' + mouse.x + ',' + mouse.y;
			console.log(message);
		}, false);
		
		for (var i=0; i < menu.menus.length; i++) {
			menu.menus[i].canvas = document.getElementById("menu0");
			menu.menus[i].ctx = menu.menus[i].canvas.getContext('2d');
			menu.menus[i].canvas.width = menu.menus[i].w;
			menu.menus[i].canvas.height = menu.menus[i].h;
			//menu.menus[i].canvas.left = menu.menus[i].x;
			//menu.menus[i].canvas.top = menu.menus[i].y;
			//menu.menus[i].canvas.attr("z-index", 1);
			$("#menu0").css("z-index", i);
			var x = 0;
			var y = 0;
			
			if (menu.menus[i].xPosition === "relative") {
				x = g_canvasW+menu.menus[i].x;
			} else {
				x = menu.menus[i].x;
			}

			if (menu.menus[i].yPosition === "relative") {
				y = g_canvasW+menu.menus[i].y;
			} else {
				y = menu.menus[i].y;
			}
			
			console.log("x " + String(x));
			$("#menu0").css("left", x);
			$("#menu0").css("top", y);
			
			menu.menus[i].canvasW = $("#canvas").width();
			menu.menus[i].canvasH = $("#canvas").height();
			console.log(menu.menus[i].ctx);
		}

		play = true;
		
		mouse = {
			x: 0,
			y: 0
		};

		mbutton = {
			l: false,
			lp: false
		};
		
		options = {
			vectors: false,
			circles: false,
			tracking: {
				t: false,
				id: 0,
				pause: false
			}
		};
		
		keys = [];
		for (var i=0; i<=222; i++) {
			keys[i] = false;
		}

		balls = [];


		mediaLoad();
		
		reset(1);
		
			
		getInput()
		

		if(typeof gameLoop != "undefined") clearInterval(gameLoop);
		gameLoop = setInterval(tick, 1000/frameRate);

		console.log(balls);
	};
})