export class Enemy4 {
  constructor() {
    this.image = new Image();
    this.image.src = "img/enemy3.png";
    this.speed = Math.random() * 4 + 1;
    this.spriteWidth = 218;
    this.spriteHeight = 177;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.angle = Math.random() * 500; // Where sprites start along path
    this.angleSpeed = Math.random() * 0.5 + 0.5;
  }
  update(gameFrame) {
    // Triple figure eight movement pattern -------------------------------------
    // Cycle horizontal movement using sine wave from center of canvas
    this.x =
      (canvas.width / 2) * Math.sin((this.angle * Math.PI) / 90) +
      canvas.width / 2 -
      this.width / 2;
    // Cycle vertical movement using cosine wave from center of canvas
    this.y =
      (canvas.height / 2) * Math.cos((this.angle * Math.PI) / 270) +
      canvas.height / 2 -
      this.height / 2;

    this.angle += this.angleSpeed;

    // Animate sprites ----------------------------------------------
    // Check if gameFrame is even (divisible by 2)
    // This is a quick way to slow down animation without using deltaTime
    if (gameFrame % this.flapSpeed === 0) {
      // Increment this.frame by 1 and ensure it cycles through values 0 to 4
      this.frame = (this.frame + 1) % 5;
    }
  }
  draw(ctx) {
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
