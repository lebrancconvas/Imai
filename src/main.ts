import { canvas, ctx, config } from './canvas';
import { Background, Player } from './components';

// Prepare the canvas.
canvas.width = config.width;
canvas.height = config.height;
canvas.style.backgroundColor = config.backgroundColor;

// Code.

// Init.
let lastTime = 0;
let timestamp = 0;

const background1 = new Background('/assets/image/background/ocean/Ocean_3/1.png');
const background2 = new Background('/assets/image/background/ocean/Ocean_3/2.png');
const background3 = new Background('/assets/image/background/ocean/Ocean_3/3.png');
const background4 = new Background('/assets/image/background/ocean/Ocean_3/4.png');
const player = new Player('/assets/image/spritesheet/male/Archer/Idle.png', 0, canvas.height - 200, 6);

// Game Loop.
function animate(timestamp: number) {
  window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Delta Time.
  const deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  // Animation Code.
  background1.draw(ctx);
  background2.draw(ctx);
  background3.draw(ctx);
  background4.draw(ctx);

  player.update();
  player.draw(ctx);

  console.log(`Delta Time: ${deltaTime} seconds`);
  console.log(`FPS: ${1000 / deltaTime}`);

};

animate(timestamp);
