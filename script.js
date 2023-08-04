import { Enemy1 } from "./modules/enemy1.js";

/** @type {HTMLCanvasElement} */
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);
const NUMBER_OF_ENEMIES = 100;

let gameFrame = 0;

const enemies = Array.from({ length: NUMBER_OF_ENEMIES }, () => new Enemy1());

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
