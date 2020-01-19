function Food() {
  this.x = floor(random(width / scl)) * scl;
  this.y = floor(random(height / scl)) * scl;

  this.newFood = function() {
    this.x = floor(random(width / scl)) * scl;
    this.y = floor(random(height / scl)) * scl;
  };

  this.draw = function() {
    fill(255, 0, 100);
    rect(this.x, this.y, scl, scl);
  };
}
