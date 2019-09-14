var http = require('http');
//loads http module
var app=http.createServer(function (req, res) {
//creates server
  res.writeHead(200, {'Content-Type': 'text/plain'});


function randomIntFromInterval(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min);
}

var dataType = null;
var sampleData = {};
var numDataPoints = 15;
var currentPoint = {};
var currentDate = null;

dataType = 'BP';

if(dataType == 'BP'){
	sampleData["blood pressure"] = [];
	var currentSys = 0;
	var currentDia = 0;
	var currentReading = "";

	for(i=0; i<numDataPoints; i++){
		currentPoint = {};
		currentSys = randomIntFromInterval(115,130);
		currentDia = randomIntFromInterval(75,90);
		currentReading = currentSys.toString() + "/" + currentDia.toString();

		if(currentDate){
			currentDate = moment(currentDate).subtract(1,'days');
		}else{
			currentDate = moment();
		}


		currentPoint["quantity"] = currentReading;
		currentPoint["endDate"] = currentDate;

		sampleData["blood pressure"].push(currentPoint);
	};
}

console.log("**** the end sample data is: " + JSON.stringify(sampleData));
  //sets the right header and status code
  res.end(sampleData);
  //outputs string with line end symbol
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
// }).listen(1337, "127.0.0.1");
//sets port and IP address of the server
console.log('Server running at http://127.0.0.1:8080/');
