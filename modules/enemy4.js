export class Enemy4 {
  constructor() {
    this.image = new Image();
    this.image.src = "img/enemy4.png";
    this.speed = Math.random() * 4 + 1;
    this.spriteWidth = 213;
    this.spriteHeight = 213;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.newX = Math.random() * (canvas.width - this.width);
    this.newY = Math.random() * (canvas.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.moveInterval = Math.floor(Math.random() * 200 + 50);
  }
  update(gameFrame) {
    // Autonomous movement ------------------------------------------
    if (gameFrame % this.moveInterval === 0) {
      this.newX = Math.random() * (canvas.width - this.width);
      this.newY = Math.random() * (canvas.height - this.height);
    }
    const dx = this.x - this.newX;
    const dy = this.y - this.newY;
    this.x -= dx / 70;
    this.y -= dy / 70;

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
