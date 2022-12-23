const TOTAL = 500;
let birds = [];
let savedBirds = [];
let pipes = [];
let counter = 0;
let score = 0;
let slider, slider_text;

function keyPressed() {
  if (key === 'S') {
    let bird = birds[0];
    saveJSON(bird.brain, 'bird.json');
  }
}

function setup() {
  createCanvas(800, 600);
  slider_text = createElement('h5', 'Speed: ');
  slider = createSlider(1, 10, 1);
  for (let i = 0; i < TOTAL; i++) {
    birds[i] = new Bird();
  }
}

function draw() {
  for (let n = 0; n < slider.value(); n++) {
    if (counter % 50 == 0) {
      pipes.push(new Pipe());
    }
    counter++;

    for (let i = pipes.length - 1; i >= 0; i--) {
      pipes[i].update();

      for (let j = birds.length - 1; j >= 0; j--) {
        if (pipes[i].collides(birds[j])) {
          savedBirds.push(birds.splice(j, 1)[0]);
        }
      }

      if (pipes[i].offscreen()) {
        pipes.splice(i, 1);
        score++;
      }
    }

    for (let i = birds.length - 1; i >= 0; i--) {
      if (birds[i].offScreen()) {
        savedBirds.push(birds.splice(i, 1)[0]);
      }
    }

    for (let bird of birds) {
      bird.think(pipes);
      bird.update();
    }

    if (birds.length === 0) {
      counter = 0;
      score = 0;
      nextGeneration();
      pipes = [];
    }
  }

  // drawing
  background("#0ff");

  for (let bird of birds) {
    bird.draw();
  }

  for (let pipe of pipes) {
    pipe.show();
  }

  fill("#000");
  text(`score = ${score}`, width-150, 20);
}