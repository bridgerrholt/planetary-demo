$(document).ready(function() {
	menu = {
		active: {
			t: false,
			id: 0
		},
		
		menus: [ {
				xPosition: "relative",
				yPosition: "absolute",
				x: -206,
				y: 5,
				w: 200,
				h: 400,
				active: true,
				colors: [
					"#bbb",
					"#777"
				]
			}
		]
	};

	
	
	menu.update = function() {
		/*if (keys[49]) {
			menu.menus[0].active = !menu.menus[0].active;
		}*/
	};

	menu.draw = function() {
		var x = 0;
		var y = 0;
		for (var i=0; i<menu.menus.length; i++) {
			if (menu.menus[i].active) {
				if (menu.menus[i].xPosition === "relative") {
					x = g_canvasW+menu.menus[i].x;
				} else {
					x = menu.menus[i].x;
				}

				if (menu.menus[i].yPosition === "relative") {
					y = g_canvasH+menu.menus[i].y;
				} else {
					y = menu.menus[i].y;
				}
				x = 0;
				y = 0;

				//x += 0.5;
				//y += 0.5;
				menu.menus[i].ctx.fillStyle = menu.menus[i].colors[1];
				menu.menus[i].ctx.fillRect(x, y, menu.menus[i].w, menu.menus[i].h);
				menu.menus[i].ctx.strokeStyle = menu.menus[i].colors[0];
				menu.menus[i].ctx.strokeRect(x, y, menu.menus[i].w, menu.menus[i].h);
				menu.menus[i].ctx.strokeRect(x+1, y+1, menu.menus[i].w-2, menu.menus[i].h-2);

				if (i === 0) {
					var xO = x+5;
					var yO = y+19;
					var color = "#EEE"
					for (var j=0; j<balls.length; j++) {
					
						drawText(
							menu.menus[i].ctx,
							"Ball " + String(j),
							xO, yO,
							balls[j].color, 16, "Times");
							
						yO += 16
						xO += 4
						drawText(
							menu.menus[i].ctx,
							"x: " + String(Math.round(balls[j].x)),
							xO, yO,
							color, 14, "Times");
							
						yO += 16
						drawText(
							menu.menus[i].ctx,
							"y: " + String(Math.round(balls[j].y)),
							xO, yO,
							color, 14, "Times");
							
						yO += 16
						drawText(
							menu.menus[i].ctx,
							"mass: " + String(balls[j].mass),
							xO, yO,
							color, 14, "Times");

							
							
						yO += 22;
						xO = x+5;
					}
				}
			}

			x = 0;
			y = 0;
		}
	};
});
















