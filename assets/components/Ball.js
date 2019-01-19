class Ball {
	constructor(props) {
		this.x = 0
		this.y = 0
		this.r = 0
		this.vx = 0
		this.vy = 0
		this.scaleX = 1
		this.scaleY = 1
		this.strokeStyle = 'rgba(0,0,0,0)'
		this.fillStyle = '#ffb400'
		this.alpha = 1
		Object.assign(this, props)
	}
	render(ctx) {
		let {x, y, r, scaleX, scaleY, strokeStyle, fillStyle, alpha} = this
		ctx.save()
		ctx.translate(x, y)
		ctx.scale(scaleX, scaleY)
		ctx.strokeStyle = strokeStyle
		ctx.fillStyle = fillStyle
		ctx.globalAlpha = alpha
		ctx.beginPath()
		ctx.arc(0, 0, r, 0, 2*Math.PI)
		ctx.fill()
		ctx.stroke()
		ctx.restore()
		return this
	}
	isPoint(mousePos) {
		let {x, y} = mousePos

		return this.r >= Math.sqrt((this.x - x) ** 2, (this.y - y) ** 2)
	}
}