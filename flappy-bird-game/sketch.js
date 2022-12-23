let bird;
let pipes = [];
let frameCounter = 0;

function setup(){
    createCanvas(800, 600);    
    bird = new Bird();
}

function draw(){
    if (frameCounter % 50 == 0) {
        pipes.push(new Pipe());
    }
    frameCounter++;
  
    for (let i = pipes.length - 1; i >= 0; i--) {
        pipes[i].update();
        if (pipes[i].collides(bird)) {
            noLoop();
            alert('failed');
        }
    }

    bird.update();
    if (bird.offScreen()){
        noLoop();
        alert('failed');
    }

    //drawings
    background(255);

    fill(255);
    rect(0,0,width,height);

    for (let pipe of pipes) {
        pipe.draw();
    }

    bird.draw();
}

function keyPressed() {
    if (key == ' ') {
        bird.up();
    }
}