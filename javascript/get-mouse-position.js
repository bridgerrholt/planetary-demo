$(document).ready(function() {
	getMousePosition = function(canvas, evt) {
		var rect = canvas.getBoundingClientRect();
		return {
			x: evt.clientX-rect.left,
			y: evt.clientY-rect.top
		};
	};
})