export class Player {
  x: number;
  y: number;
  width: number;
  height: number;
  spriteWidth: number;
  spriteHeight: number;
  image: HTMLImageElement;
  frameX: number;
  frameNumber: number;

  constructor(src: string, x: number, y: number, frameNumber: number) {
    this.x = x;
    this.y = y;
    this.frameX = 0;
    this.frameNumber = frameNumber;
    this.width = 200;
    this.height = 200;
    this.spriteWidth = 768 / this.frameNumber;
    this.spriteHeight = 128;
    this.image = new Image();
    this.image.src = src;
  }

  update() {
    this.frameX = this.frameX % (this.frameNumber - 1);
    this.frameX++;
  }

  draw(c: CanvasRenderingContext2D) {
    c.drawImage(this.image, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
  }
};
