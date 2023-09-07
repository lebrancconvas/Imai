import { canvas } from "../canvas";

export class Background {
  x: number;
  y: number;
  width: number;
  height: number;
  image: HTMLImageElement;

  constructor(src: string) {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.image = new Image();
    this.image.src = src;
  }

  draw(c: CanvasRenderingContext2D) {
    c.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
};

