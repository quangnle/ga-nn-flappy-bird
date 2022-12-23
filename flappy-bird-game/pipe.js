class Pipe {
    constructor() {
      this.spacing = 125;
      this.top = random(height / 6, (3 / 4) * height);
      this.bottom = height - (this.top + this.spacing);
      this.x = width;
      this.w = 80;
      this.speed = 6;
    }
  
    collides(bird) {
      if (bird.y < this.top || bird.y > height - this.bottom) {
        if (bird.x > this.x && bird.x < this.x + this.w) {
          return true;
        }
      }
      return false;
    }
  
    draw() {
      fill("#0f0");
      rectMode(CORNER);

      //upper pipe
      rect(this.x + 5, 0, this.w-10, this.top-30);
      rect(this.x, this.top-30, this.w, 30);

      // lower pipe
      rect(this.x, height - this.bottom, this.w, 30);
      rect(this.x + 5, height - this.bottom + 30, this.w - 10, this.bottom - 30);
    }
  
    update() {
      this.x -= this.speed;
    }
  
    offscreen() {
      if (this.x < -this.w) {
        return true;
      } else {
        return false;
      }
    }
  }