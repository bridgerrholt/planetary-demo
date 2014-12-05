$(document).ready(function() {
	tools = {
		down: false
	};

	tools.update = function() {
		if (tools.down === false && mbutton.l === true) {
			tools.down = true;
			var max = 255;
			var min = 200;
			var r = Math.floor(Math.random() * (max - min) + min);
			var g = Math.floor(Math.random() * (max - min) + min);
			var b = Math.floor(Math.random() * (max - min) + min);
			var color = "RGB(" + String(r) + "," + String(g) + "," + String(b) + ")";
			bubbles[bubbles.length] = new Bubble(mouse.x, mouse.y, color);
			console.log(color);
		} else if (tools.down === true && mbutton.l === false) {
			tools.down = false;
			bubbles[bubbles.length-1].free = true;
		}

		if (tools.down) {
			bubbles[bubbles.length-1].size += 1;

			var xDiff = mouse.x-bubbles[bubbles.length-1].x;
			var yDiff = mouse.y-bubbles[bubbles.length-1].y;

			bubbles[bubbles.length-1].speed = Math.sqrt(
				Math.pow(xDiff, 2) +
				Math.pow(yDiff, 2));
			bubbles[bubbles.length-1].direction = Math.atan2(yDiff, xDiff) * (180 / Math.PI);

			bubbles[bubbles.length-1].x = mouse.x;
			bubbles[bubbles.length-1].y = mouse.y;
		}
	};
})