$(document).ready(function() {
	Vector = function(x, y) {
		this.x = x;
		this.y = y;
	};
	
	Vector.prototype.getMagnitude = function() {
		return Math.sqrt(this.x*this.x + this.y*this.y);
	};
	
	Vector.prototype.getAngle = function() {
		return Math.atan2(this.y, this.x);
	};
	
	Vector.prototype.getVectorDirection = function() {
		return new Vector(this.x/this.getMagnitude(), this.y/this.getMagnitude());
	};
	
	Vector.prototype.minusVector = function(vector2) {
		this.x -= vector2.x;
		this.y -= vector2.y;
	};
	
	Vector.prototype.addVector = function(vector2) {
		//console.log("AA");
		//console.log(this);
		this.x += vector2.x;
		this.y += vector2.y;
		//console.log(this);
	};
	
	Vector.prototype.multiply = function(scaler) {
		this.x *= scaler;
		this.y *= scaler;
	};
	
	Vector.prototype.reset = function() {
		this.x = 0;
		this.y = 0;
	};
})