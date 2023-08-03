/** @type {HTMLCanvasElement} */
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);
const NUMBER_OF_ENEMIES = 100;

let gameFrame = 0;

class Enemy {
  constructor() {
    this.image = new Image();
    this.image.src = "img/enemy1.png";
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.speed = Math.random() * 4 - 2;
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
  }
  update() {
    this.x += this.speed;
    this.y += this.speed;
    // Animate sprites

    // Check if gameFrame is even (divisible by 2)
    // This is a quick way to slow down animation without using deltaTime
    if (gameFrame % this.flapSpeed === 0) {
      // Increment this.frame by 1 and ensure it cycles through values 0 to 4
      this.frame = (this.frame + 1) % 5;
      //   this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }
  draw() {
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

const enemies = Array.from({ length: NUMBER_OF_ENEMIES }, () => new Enemy());

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  enemies.forEach((enemy) => {
    enemy.update();
    enemy.draw();
  });
  gameFrame++;

  requestAnimationFrame(animate);
}

animate();
