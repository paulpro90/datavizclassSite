// ********* Global variables //

var totalCurrent = 51.75;
var totalPotential = 61.29;
var c28c = 10.36;
var c28p = 16.4;
var c84c = 3.76;
var c84p = 2.32;
var c46c = 1.12;
var c46p = 1.25;
var c19c = 4.25;
var c19p = 8.49;
var c19c = 6.25;
var r10ac = 14.25;
var r10c = 3.1;
var r8c = 7.05;
var r8p = 14.3;
var r8bc = 6;
var r8bp = 1.3;
var r10ap = 12.08;
var r10p = 6.72;

function setup() {
	createCanvas(800, 800);
	textFont( 'Roboto');
	noLoop();
	//first is horizontal align, 2nd is vertical align//
	//textAlign( RIGHT, TOP);//
	//background(100);
}

function draw(){


 
  line(600, 498, 0, 498);
  stroke(1); 
  
  line(600, 263, 0, 263);
  stroke(1); 
  
	//Current;//
  noStroke();
  rect(30, 300, 7.9 * 30, (totalCurrent/7.9) * 30, 10, 10, 10, 10);
  fill(0, 189, 205);
  
  rect(36, 400, 3.65 * 30, (c28c/3.65) * 30, 10, 10, 10, 10);
  fill(139, 211, 221);
  
  rect(36, 333, 1.83 * 30, (c84c/1.83) * 30, 10, 10, 10, 10);
  fill(234, 246, 247);
  
  rect(36, 310, 1.83 * 30, (c46c/1.83) * 30, 10, 10, 10, 10);
  fill(95, 200, 215);
  
  rect(94, 310, 1.71 * 30, (2.8) * 30, 10, 10, 10, 10);
  fill(0, 118, 182);
  
  rect(150, 378, 3.0 * 30, (r10ac/4) * 30, 10, 10, 10, 10);
  fill(76, 152, 203);
  
  rect(244, 378, .6 * 30, (r10ac/4) * 30, 5, 5, 5, 5);
  fill(175, 203, 230);
  
  rect(150, 310, 2.26 * 30, (r8c/3.3) * 30, 10, 10, 10, 10);
  fill(115, 168, 212);
  
  rect(222, 310, 1.35 * 30, (r8bc/2.85) * 30, 10, 10, 10, 10);
  fill(209, 230, 247);
  //Potential;//
  rect(330, 264, 7.9 * 30, (totalPotential/7.9) * 30, 10, 10, 10, 10);
  fill(0, 189, 194);
  
  rect(336, 360, 3.72 * 30, (c28p/3.72) * 30, 10, 10, 10, 10);
  fill(139, 211, 221);
  
  rect(336, 302, 1.27 * 30, (c84p/1.27) * 30, 10, 10, 10, 10);
  fill(234, 246, 247);
  
  rect(336, 270, 1.27 * 30, (c46p/1.27) * 30, 10, 10, 10, 10);
  fill(95, 200, 215);
  
  rect(380, 270, 2.23 * 30, (c19p/2.95) * 30, 10, 10, 10, 10);
  fill(0, 118, 182);
   //REsidentail//
   
  rect(452, 333, 2.27 * 30, (r10ap/2.27) * 30, 10, 10, 10, 10);
  fill(76, 152, 203);   
  
  rect(523, 333, 1.3 * 30, (r10p/1.25) * 30, 10, 10, 10, 10);
  fill(175, 203, 230);  
  
  rect(452, 270, 2.77 * 30, (r8p/7.27) * 30, 10, 10, 10, 10);
  fill(115, 168, 212); 
  
  rect(538, 270, 0.8 * 30, (r8bp/.65) * 30, 10, 10, 10, 10);
  fill(0);
  

   textSize(10);
   text( '(units in millions)', 16, 100);
   text( 'C = Commercial Zone', 16, 120);
   text( 'R = Residential Zone', 16, 135);

   textSize(12);
   text( '61.29 ft2', 530, 520);
   text( '51.75 ft2', 230, 520);
   text( '10.36 ft2', 39, 413);
   text( '3.76 ft2', 39, 346);
   text( '1.12 ft2', 39, 310);
   text( '6.25 ft2', 97, 324);
   text( '7.05 ft2', 153, 324);
   text( '6.0 ft2', 225, 324);
   text( '14.25 ft2', 153, 392);
   text( '3 ft2', 249, 392);
   text( '16.4 ft2', 339, 374);
   text( '2.32 ft2', 339, 314);
   text( '1.25 ft2', 339, 282);
   text( '8.49 ft2', 383, 282);
   text( '14.3 ft2', 455, 282);
   text( '1.3 ft2', 541, 282);
   text( '12.08 ft2', 455, 347);
   text( '6.72 ft2', 528, 347);
   
   textSize(14);
   text( 'C2-8', 39, 480);
   text( 'C8-4', 39, 390);
   text( 'C4-6', 39, 324);
   text( 'C1-9', 97, 390);
   text( 'R-8', 153, 368);
   text( 'R-8b', 235, 368);
   text( 'R-10', 153, 480);
   text( 'R-10', 153, 480);
   text( 'R-10a', 249, 480);
   text( 'C2-8', 339, 486);
   text( 'C8-4', 339, 352);
   text( 'C4-6', 339, 297);
   text( 'C1-9', 383, 352);
   text( 'R-8', 455, 325);
   text( 'R-8b', 541, 325);
   text( 'R-10', 455, 486);
   text( 'R-10a', 528, 486);
   
   textSize(20);
   text( 'Unbuilt Yorkville', 16, 80);
   
   textSize(14);
   text( 'Potential Built Area', 335, 520);
   text( 'Current Built Area', 36, 520);
   fill(209, 230, 247); 
  
}