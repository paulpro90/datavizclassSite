console.log ('no vaars?');
var cols = 100;
var rows = 100;

function setup(){
createCanvas(500, 500);
colorMode (HSB, 100); 
for (var i = 0; i < 100; i++) {
  for (var j = 0; j < 100; j++) {
    stroke(i, j, 100);
    point(i, j);
  }
}

print ('Setup Complete...');
}

function draw(){

 for(var i = 0; i <= width; i += 3) {
    for(var j = 0; j <= height; j += 3) {
			var x = i * 5;
			var y = j * 5;
			noStroke ();
			fill (i, j, 100);
			rect(x, y, width, height);
		}
	}
}
