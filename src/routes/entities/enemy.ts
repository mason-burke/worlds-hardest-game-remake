export type Enemy = {
  initialState: {
    x: number,
    y: number
  }
  currentState: {
    x: number,
    vx: number,
    y: number,
    vy: number
  }
  path: [
    {
      vx: number,
      vy: number,
      start: number,
      end: number
    }
  ]
  progress: number
  reverse: boolean
}

const enemyConstants = {
  size: 10,
  fill: 'rgb(0, 5, 250)',
  lineWidth: 5,
  stroke: 'black'
}

export const drawEnemy = (x: number, y: number, ctx: CanvasRenderingContext2D) => {
  ctx.beginPath()
  ctx.arc(x, y, enemyConstants.size, 0, 2 * Math.PI)
  ctx.fillStyle = enemyConstants.fill
  ctx.fill()
  ctx.lineWidth = enemyConstants.lineWidth
  ctx.strokeStyle = enemyConstants.stroke
  ctx.stroke()
  ctx.closePath()
}