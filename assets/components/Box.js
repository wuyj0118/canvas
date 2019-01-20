class Box {
	constructor(props) {
		this.x = 0;
		this.y = 0;
		this.w = 100;
		this.h = 100;
		this.vx = 0;
		this.vy = 0;
		this.fillStyle = '#ffb400';
		this.strokeStyle = 'rgba(0,0,0,0)';
		this.rotation = 0;
		this.lineWidth = 0;
		Object.assign(this, props)
		return this
	}
	render(ctx) {
		let {x, y, w, h, rotation, fillStyle, strokeStyle, lineWidth} = this;
		ctx.save();
		ctx.translate(x, y);
		ctx.rotate(rotation);
		ctx.lineWidth = lineWidth;
		ctx.fillStyle = fillStyle;
		ctx.strokeStyle = strokeStyle;
		ctx.beginPath();
		ctx.lineTo(0, 0);
		ctx.lineTo(w, 0);
		ctx.lineTo(w, h);
		ctx.lineTo(0, h);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		ctx.restore();
		return this
	}
	isPoint(mouse) {
		let {x, y} = mouse
		return x >= this.x && y >= this.y && x <= this.x + this.w && y <= this.y + this.h
	}
}