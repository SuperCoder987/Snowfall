class Snowflake {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;

        this.mass = random(1, 5);
        this.speed = random(-3, 3);
        this.img = img.sf[Math.floor(Math.random() * img.sf.length)];
    }

    display() {
        this.x += this.speed;
        this.y += this.mass;

        imageMode(CENTER);
        image(this.img, this.x, this.y, this.size, this.size);

        if (this.y > 800 || this.x > 1300 || this.x < -100) this.remove();
    }

    remove() {
        snowflakes.splice(snowflakes.indexOf(this), 1);
    }
}
