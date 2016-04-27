export default class BubbleEffect {
  constructor(canvas, bg) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.bg = bg
    this.size = {
      wdith: canvas.width,
      height: canvas.height
    }
  }

  init() {
    this.ctx.drawImage(this.bg, 0, 0)
  }
}


