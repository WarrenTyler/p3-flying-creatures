/** @type {HTMLCanvasElement} */
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);
const NUMBER_OF_ENEMIES = 100;

class Enemy {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.width = 100;
    this.height = 100;
    this.speed = Math.random() * 4 - 2;
  }
  update() {
    this.x += this.speed;
    this.y += this.speed;
  }
  draw() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const enemies = Array.from({ length: NUMBER_OF_ENEMIES }, () => new Enemy());

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

   enemies.forEach((enemy) => {
    enemy.update();
    enemy.draw();
  });

  requestAnimationFrame(animate);
}

animate();
