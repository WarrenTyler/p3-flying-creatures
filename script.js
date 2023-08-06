import { Enemy2 } from "./modules/enemy2.js";

/** @type {HTMLCanvasElement} */
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);

canvas.style.width = CANVAS_WIDTH + "px";
canvas.style.height = CANVAS_HEIGHT + "px";

const NUMBER_OF_ENEMIES = 100;

let gameFrame = 0;

const enemies = Array.from({ length: NUMBER_OF_ENEMIES }, () => new Enemy2());

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  enemies.forEach((enemy) => {
    enemy.update(gameFrame);
    enemy.draw(ctx);
  });
  gameFrame++;

  requestAnimationFrame(animate);
}

animate();
