var snake;
var scl = 60;
var food = [];
var foodanz = 3;

function setup() {
  createCanvas(600, 600);
  snake = new Snake();
  frameRate(10);
  for (var i = 0; i < foodanz; i++) {
    food[i] = new Food();
  }
}

function draw() {
  background(51);
  snake.death();
  snake.update();
  snake.show();

  for (var i = 0; i < foodanz; i++) {
    food[i].draw();
    if (snake.eat(food[i])) {
      food[i] = new Food();
    }
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0);
  }
}
