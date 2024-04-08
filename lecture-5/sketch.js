let img;
let circleX = 100;
let circleY = 100;
let score = 0

// Load the image and create a p5.Image object.
function preload() {
  img = loadImage('./spot.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode (CENTER);
}  
  function draw() {
    background(0);

    image(img, mouseX, mouseY, 250, 250);

    noFill();
    circle(circleX, circleY, 60);

    let d = dist(mouseX, mouseY, circleX, circleY);

    if(d < 30){
    circleX = random(0, width);
    circleY = random(0, width);
    score = score + 1;
    }

    stroke ("white");
    text (score, 50, 50);

    if (score > 5) {   
        text("you know u need to do your homework?", 50,70);
    }
}