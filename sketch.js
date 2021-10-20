const img = {
    bg: undefined,
    sf: [],
};

let spawnSpeed = 15;

const snowflakes = [];

function preload() {
    img.bg = loadImage('./snow1.jpg');
    img.sf = ['./snow4.webp', './snow5.webp'].map(loadImage);
}

function setup() {
    frameRate(60);
    createCanvas(1280, 720);
}

function draw() {
    background(img.bg);

    if (frameCount % spawnSpeed == 0) {
        snowflakes.push(new Snowflake(random(0, 1280), -50, random(50, 100)));
    }

    for (const i in snowflakes) {
        snowflakes[i].display();
    }
}
