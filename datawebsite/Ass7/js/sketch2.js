// Global Variables //
var apiKey = 'e9d62e82d09c6e508f7d5bbff55d8bbf';
var baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
var weatherData;
var city = 'New York';
var button;
var cityInput;
var description = '';
var temperature = 0;
var tempMax = 0;
var tempMin = 0;
var humidity = 0;
var pressure = 0;



// **** Setup Function ****** //
function setup(){
  
  createCanvas(800, 550);

  textFont ('Roboto Condensed');
  textSize (14);
  button = select('#submit');
  cityInput = select('#city');
  button.mousePressed(queryAPI);
 
  noLoop();
}

// **** Query API Function *** //
function queryAPI(){
  var request = baseURL + cityInput.value() + '&apikey=' + apiKey;
  loadJSON(request, getWeatherData);
}

function getWeatherData(apiData){
  weatherData = apiData;
  description = weatherData.weather[0].main;
  temperature = weatherData.main.temp;
  tempMax = weatherData.main.temp_max;
  tempMin = weatherData.main.temp_min;
  humidity = weatherData.main.humidity;
  wind = weatherData.wind.speed;
  print(weatherData);
  redraw();
}




// **** Draw Function **** //
function draw(){
	
  var roundTemp = Math.round((temperature * (9/5)) - 459.67);
  var roundMax = Math.round((tempMax * (9/5)) - 459.67);
  var roundMin = Math.round((tempMin * (9/5)) - 459.67);

  background(255);
  
      if (roundTemp < -10){
	background(255)
	noStroke();
	   fill(255);
	   ellipse( 400, 170, 200, 200);
   }
   
     else if (roundTemp < 0){
	background(255)
	noStroke();
	   fill(35, 97, 146);
	   ellipse( 400, 170, 200, 200);
   }
   
        else if (roundTemp < 10){
	background(255)
	noStroke();
	   fill(94, 138, 180);
	   ellipse( 400, 170, 200, 200);
   }
   
        else if (roundTemp < 20){
	background(255)
	noStroke();
	   fill(125, 161, 196);
	   ellipse( 400, 170, 200, 200);
   }
   
    else if (roundTemp < 33){
	background(255)
	noStroke();
	   fill(155, 184, 211);
	   ellipse( 400, 170, 200, 200);
   }
   
    else if (roundTemp < 40){
	background(255)
	noStroke();
	   fill(198, 214, 227);
	   ellipse( 400, 170, 200, 200);
   }
   
     else if (roundTemp < 50){
	 background(255);
	 noStroke();
	   fill(209, 221, 230);
	   ellipse( 400, 170, 200, 200);
   }
   
        else if (roundTemp < 60){
	 background(255);
	 noStroke();
	   fill(237, 218, 36);
	   ellipse( 400, 170, 200, 200);
   }
   
     else if (roundTemp < 70){
	background(255)
	noStroke();
	   fill(255, 178, 91);
	   ellipse( 400, 170, 200, 200);
   }
   
      else if (roundTemp < 80){
	background(255)
	noStroke();
	   fill(220, 107, 47);
	   ellipse( 400, 170, 200, 200);
   }
   
    else if (roundTemp < 90){
	background(255)
	noStroke();
	   fill(220, 68, 5);
	   ellipse( 400, 170, 200, 200);
   }
   
       else if (roundTemp < 100){
	background(255)
	noStroke();
	   fill(150, 56, 33);
	   ellipse( 400, 170, 200, 200);
   }
 
  if (weatherData){
	
	
	fill(0);
	textAlign(CENTER);
	textSize(18);
	textFont('Libre Baskerville');
    text(cityInput.value(), 400, 40);
	textSize(18);
    text(description, 400, 120);
	textAlign(LEFT);
	textFont('Roboto Condensed');
	textStyle(BOLD);
	textSize(84);
    text(roundTemp + ' F', 325, 200);
	textStyle (NORMAL);
	textFont('Libre Baskerville');
	textSize(14);
	textAlign(CENTER);
	textSize(14);
	text(roundMax + ' F', 420, 230);
	text(roundMin + ' F  / ', 380, 230);
	textStyle (NORMAL);
    text(humidity + '% humidity', 70, 510);
    text('Wind: ' + wind + ' mph', 740, 510);
	fill(0);

  }
 
  //if (description = 'Clouds'){
	//  fill(0);
	//  noStroke();
	//  ellipse(410, 330, 62, 62);
	//  ellipse(400, 360, 60, 60);
	//  ellipse(430, 350, 60, 60);
	//  ellipse(370, 350, 60, 60);
	  
  //}
  
 // else if (description = 'Snow'){
	  //noStroke();
	  //ellipse(410, 330, 62, 62);
	  //ellipse(400, 360, 60, 60);
	 // ellipse(430, 350, 60, 60);
	 // ellipse(370, 350, 60, 60);
	 // ellipse(370, 320, 5, 5);
	 // fill(200);
  //}
   // else if (description = 'Clear'){
	 // Stroke(2);
	//  ellipse(410, 330, 62, 62);
	//  fill(255);
  //}
  
}

