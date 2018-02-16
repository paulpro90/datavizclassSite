console.log ('Hello');
var max_d;

function setup() {
  createCanvas(500, 500);
  max_d = dist(0, 0, width, height);
}

function draw() {
  background(255);

  for(var i = 10; i <= width; i += 20) {
    for(var j = 10; j <= height; j += 20) {
      var size = dist(mouseX, mouseY, i, j);
      size = size/max_d * 20;
	  if (size > 50){
		  fill (200);
	  }
	  else {
		  fill ((size * 255)/13)
	  }
      ellipse(i, j, size, size);
    }
  }
}