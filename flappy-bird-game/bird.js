class Bird {
    constructor() {
        this.y = height / 2;
        this.x = 64;

        this.gravity = 0.8;
        this.lift = -16;
        this.velocity = 0;
    }

    draw() {
        stroke(0);

        // body
        fill("#ff0");
        ellipse(this.x, this.y, 32, 32);

        // eye
        fill("#f00");
        ellipse(this.x+8, this.y-5, 5, 5);

        // peak
        fill("#f00");
        ellipse(this.x+17, this.y+5, 14, 8);
        line(this.x+10, this.y+5, this.x+24, this.y+5);
    }

    up() {
        this.velocity += this.lift;
    }

    offScreen() {
        return this.y > height || this.y < 0;
    }

    update() {
        this.velocity += this.gravity;
        this.y += this.velocity;
    }
}