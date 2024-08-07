function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(255);

  for (let x = 25; x <= width; x += 75) {
    for (let y = 25; y <= height; y += 75) {
      drawBow(x, y);
    }
  }
}

function drawBow(x, y) {
  // Draw left loop
  fill('lightblue');
  ellipse(x - 15, y, 30, 45);

  // Draw right loop
  ellipse(x + 15, y, 30, 45);

  // Draw center knot
  fill('black');
  ellipse(x, y, 15, 15);
}
