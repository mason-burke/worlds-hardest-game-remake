import { fillRect, strokeRect } from "../drawing/drawHelper"

export const playerConstants = {
  size: 25,
  fill: 'rgb(255, 6, 17)',
  lineWidth: 4,
  stroke: 'black',
  maxSpeed: 3,
}

export const drawPlayer = (x: number, y: number, ctx: CanvasRenderingContext2D) => {
  ctx.fillStyle = playerConstants.fill;
  fillRect(ctx, x, y, playerConstants.size, playerConstants.size);
  ctx.lineWidth = playerConstants.lineWidth;
  strokeRect(ctx, x, y, playerConstants.size, playerConstants.size);
}