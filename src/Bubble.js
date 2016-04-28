export default class Bubble {
  constructor(ctx) {
    this.ctx = ctx
    this.coord = { x: null, y: null }
  }

  update(dt) {
    this.ctx.save()
    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(this.coord.x, this.coord.y, 10, 10)
    this.ctx.restore()
  }

  moveTo(coord) {
    this.coord = coord
  }
}
