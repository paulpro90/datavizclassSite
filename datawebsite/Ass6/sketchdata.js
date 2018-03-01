// ***** Global variables ***** //
var areaC = [10.36, 3.76, 1.12, 6.25, 14.25, 3.1, 7.05, 6];
var areaP = [16.4, 2.32, 1.25, 8.49, 12.08, 6.72, 14.3, 1.3];
var zone = ['C2-8', 'C8-4', 'C4', 'C1-9', 'R10A', 'R10', 'R8', 'R8B', 'C2-8', 'C8-4', 'C4', 'C1-9', 'R10A', 'R10', 'R8', 'R8B'];
var colors = [[0, 189, 205], [139, 211, 221], [109, 162, 163], [95, 200, 215], [0, 118, 182], [76, 152, 203], [175, 203, 230], [115, 168, 212]];
var buttonLabels = ['All Zones', 'C2-8', 'C8-4', 'C4', 'C1-9', 'R10A', 'R10', 'R8', 'R8B'];
var buttonStartX = 120;
var buttonStartY = 690;
var buttonLength = 55;
var buttonHeight = 20;
var buttonSpacing = 10;
var selectedButton = 0;

// ***** Setup function ***** //
function setup(){
  createCanvas(1200, 1200);
  textAlign(LEFT, TOP);
  textSize(14);
  textFont('Libre Baskerville');
  console.log('Setup complete...');
  noLoop();
  
}
    // ******Labels***** //
function drawTitles(){
  fill(0);
  textSize(18);
  textStyle(BOLD);
  text('Current Built Area', 0, 105);
  text('Potential Buildable Area', 0, 400);
  textSize(22);
  text('Unbuilt Yorkville', 0, 25);
  textSize(10);
  text('(units in millions of sq. feet)', 3, 55);
  }
  
function drawBT(){
  fill(0);
  textSize(12);
  textStyle(BOLD);
  text('Compare Area:', 0, 690);
  }

 function drawLabelsP(){
  fill(0);
  textSize(9);
  var startText = 0;
  
 if (selectedButton == 0){
  for (var i = 0; i < areaP.length; i++) {
    textAlign(LEFT);
    text(zone[i], startText + 7*i, 632);
    textAlign(LEFT);
    text(areaP[i], startText + 7*i + 2, 432);
	startText = startText + (areaP[i] * 12);
  }
 }
else if (selectedButton >= 1){
 fill(255);
 textAlign(LEFT);
  }
 }



 function drawLabelsC(){
  fill(0);
  textSize(9);
  var startText = 0;
  
  if (selectedButton == 0){
  for (var i = 0; i < areaC.length; i++) {
    textAlign(LEFT);
    text(zone[i], startText + 7*i, 337);
    textAlign(LEFT);
    text(areaC[i], startText + 7*i + 2, 137);
	startText = startText + (areaC[i] * 12);
  }
 }
 else if (selectedButton >= 1){
 fill(255);
 textAlign(LEFT);
  }
}

// *****Rectangles***** //
function drawC(){
	
  noStroke();
  var startX = 0;
 // Chart //
 if (selectedButton == 0){
  for (var i = 0; i < areaC.length; i++) {
	fill(colors[i]);
    rect(startX + 7*i, 335, areaC[i] * 12, -200);
	startX = startX + (areaC[i] * 12);
	console.log(colors[i])
	
  }
 }
 else if (selectedButton == 1){
   fill(0, 189, 205);
   rect(0, 335, 10.36 * 12, -200);
	fill(0);
	textAlign(LEFT);
	textSize(14);
	text('10.36 ft2', 0, 340);
	
  }
   else if (selectedButton == 2){
	fill(139, 211, 221);
    rect(0, 335, 3.76 * 12, -200);
	
	fill(0);
	textAlign(LEFT);
	textSize(14);
	text('3.76 ft2', 0, 340);

  }
  else if (selectedButton == 3){
	fill(109, 162, 163);
    rect(0, 335, 1.12 * 12, -200);
	
    fill(0);
	textAlign(LEFT);
	textSize(14);
	text('1.12 ft2', 0, 340);

  }
    else if (selectedButton == 4){
	fill(95, 200, 215);
    rect(0, 335, 6.25 * 12, -200);
	
	fill(0);
	textAlign(LEFT);
	textSize(14);
	text('6.25 ft2', 0, 340);
	
  }
    else if (selectedButton == 5){
	fill(0, 118, 182);
    rect(0, 335, 14.25 * 12, -200);
	
	fill(0);
	textAlign(LEFT);
	textSize(14);
	text('14.25 ft2', 0, 340);
	
  }
    else if (selectedButton == 6){
	fill(76, 152, 203);
    rect(0, 335, 3.1 * 12, -200);
	
	fill(0);
	textAlign(LEFT);
	textSize(14);
	text('3.1 ft2', 0, 340);
	
  }
    else if (selectedButton == 7){
	fill(175, 203, 230);
    rect(0, 335, 7.05 * 12, -200);
	
	fill(0);
	textAlign(LEFT);
	textSize(14);
	text('7.05 ft2', 0, 340);
	
  }
    else if (selectedButton == 8){
	fill(115, 168, 212);
    rect(0, 335, 6 * 12, -200);
	
	fill(0);
	textAlign(LEFT);
	textSize(14);
	text('6 ft2', 0, 340);
	
  }
}

function drawP(){
	
  noStroke();
  var startX = 0;
  // Chart //
   if (selectedButton == 0){
  for (var i = 0; i < areaP.length; i++) {
	fill(colors[i]);
    rect(startX + 7*i, 630, areaP[i] * 12, -200);
	startX = startX + (areaP[i] * 12);
	
  }
 }
  else if (selectedButton == 1){
	fill(0, 189, 205);
    rect(0, 630, 16.4 * 12, -200);
	
	fill(0);
	textAlign(LEFT);
	textSize(14);
	text('16.4 ft2', 0, 635);
	
  }
    else if (selectedButton == 2){
    fill(139, 211, 221);
    rect(0, 630, 2.32 * 12, -200);
	
    fill(0);
	textAlign(LEFT);
	textSize(14);
	text('2.32 ft2', 0, 635);

  }
    else if (selectedButton == 3){
	fill(109, 162, 163);
    rect(0, 630, 1.25 * 12, -200);
	
	fill(0);
	textAlign(LEFT);
	textSize(14);
	text('1.25 ft2', 0, 635);
	
  }
    else if (selectedButton == 4){
	fill(95, 200, 215);
    rect(0, 630, 8.49 * 12, -200);
	
	fill(0);
	textAlign(LEFT);
	textSize(14);
	text('8.49 ft2', 0, 635);
	
  }
    else if (selectedButton == 5){
    fill(0, 118, 182);
    rect(0, 630, 12.08 * 12, -200);
	
	fill(0);
	textAlign(LEFT);
	textSize(14);
	text('12.08 ft2', 0, 635);
	
  }
    else if (selectedButton == 6){
	fill(76, 152, 203);
    rect(0, 630, 6.72 * 12, -200);
	
	fill(0);
	textAlign(LEFT);
	textSize(14);
	text('6.72 ft2', 0, 635);

  }
    else if (selectedButton == 7){
	fill(175, 203, 230);
    rect(0, 630, 14.3 * 12, -200);
	
	fill(0);
	textAlign(LEFT);
	textSize(14);
	text('14.3 ft2', 0, 635);
	
  }
    else if (selectedButton == 8){
	fill(115, 168, 212);
    rect(0, 630, 1.3 * 12, -200);

	fill(0);
	textAlign(LEFT);
	textSize(14);
	text('1.3 ft2', 0, 635);
	
  }
}

// ***** Draw buttons function ***** //
function drawButtons(){
  textAlign(CENTER, TOP);
  textSize(10);
  for (var i = 0; i < buttonLabels.length; i++) {
    if (selectedButton == i) {
      fill(187);
    }
    else {
      fill(255);
    }
    
    rect(buttonStartX + i * (buttonLength + buttonSpacing), buttonStartY, buttonLength, buttonHeight);
    fill(0);
    noStroke();
    text(buttonLabels[i], buttonStartX + i * (buttonLength + buttonSpacing) + buttonLength/2, buttonStartY + 2);
  }
}

  
// ***** Draw function ***** //
function draw(){
background(255);
drawC();
drawP();
drawLabelsP();
drawLabelsC();
drawTitles();
drawBT();
drawButtons();
 }
  
  // ****** Mouse pressed function ******* //
function mousePressed(){
  if (mouseX >= buttonStartX && mouseX <= (buttonStartX + buttonLength) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)) {
    selectedButton = 0;
    redraw();
  }
  else if (mouseX >= (buttonStartX + buttonLength + buttonSpacing) && mouseX <= (buttonStartX + buttonLength * 2 + buttonSpacing) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)){
    selectedButton = 1;
    redraw();
  }
  else if (mouseX >= (buttonStartX + buttonLength + buttonSpacing) && mouseX <= (buttonStartX + buttonLength * 3 + buttonSpacing * 2) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)){
    selectedButton = 2;
    redraw();
  }
    else if (mouseX >= (buttonStartX + buttonLength + buttonSpacing) && mouseX <= (buttonStartX + buttonLength * 4 + buttonSpacing * 2) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)){
    selectedButton = 3;
    redraw();
  }
      else if (mouseX >= (buttonStartX + buttonLength + buttonSpacing) && mouseX <= (buttonStartX + buttonLength * 5 + buttonSpacing * 2) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)){
    selectedButton = 4;
    redraw();
  }
        else if (mouseX >= (buttonStartX + buttonLength + buttonSpacing) && mouseX <= (buttonStartX + buttonLength * 6 + buttonSpacing * 2) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)){
    selectedButton = 5;
    redraw();
  }
        else if (mouseX >= (buttonStartX + buttonLength + buttonSpacing) && mouseX <= (buttonStartX + buttonLength * 7 + buttonSpacing * 2) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)){
    selectedButton = 6;
    redraw();
  }
        else if (mouseX >= (buttonStartX + buttonLength + buttonSpacing) && mouseX <= (buttonStartX + buttonLength * 10 + buttonSpacing * 2) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)){
    selectedButton = 7;
    redraw();
  }
       else if (mouseX >= (buttonStartX + buttonLength + buttonSpacing) && mouseX <= (buttonStartX + buttonLength * 11 + buttonSpacing * 2) && mouseY >= buttonStartY && mouseY <= (buttonStartY + buttonHeight)){
    selectedButton = 8;
    redraw();
  }
}
