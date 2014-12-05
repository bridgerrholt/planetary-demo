$(document).ready(function() {
	disDir = function(x, y, dis, dir) {
		return {
			x: x+dis*(Math.cos(dir*Math.PI/180)),
			y: y+dis*(Math.sin(dir*Math.PI/180))
		};
	};
})