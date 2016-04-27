import BubbleEffect from './BubbleEffect'

const canvas = document.querySelector('canvas')
const coverImg = new Image()
coverImg.src = './assets/cover.jpg'

const bubbleEffect = new BubbleEffect(canvas, coverImg)
coverImg.onload = () => {
  bubbleEffect.init()
}


