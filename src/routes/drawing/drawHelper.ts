export const strokeRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number
  ) => {
    x = Math.floor(x) + 0.50;
    y = Math.floor(y) + 0.50;
    ctx.strokeRect(x, y, w, h);
};

export const fillRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number
  ) => {
    x = Math.floor(x);
    y = Math.floor(y);
    ctx.fillRect(x, y, w, h);
  };