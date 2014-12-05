$(document).ready(function() {
	drawText = function(ctx, text, x, y, color, size, font) {
		ctx.fillStyle = String(color);
		ctx.font = String(size) + "pt " + String(font);
		ctx.fillText(String(text), x, y);
	}
})