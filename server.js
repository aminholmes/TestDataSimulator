var http = require('http');
var moment = require('moment');
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


	//dataType options = BP, SPO2, Weight
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
	}else if(dataType == "Weight"){
		sampleData["weight"] = [];
		var currentWeight = 0;

		for(i=0;i<numDataPoints;i++){
			currentPoint = {};
			currentWeight = randomIntFromInterval(140,160);

			if(currentDate){
				currentDate = moment(currentDate).subtract(1,'days');
			}else{
				currentDate = moment();
			}

			currentPoint["quantity"] = currentWeight.toString();
			currentPoint["endDate"] = currentDate;

			sampleData["weight"].push(currentPoint);
		}
	}else if(dataType == "SPO2"){
		sampleData["spo2"] = [];
		var currentSPO2 = 0;

		for(i=0;i<numDataPoints;i++){
			currentPoint = {};
			currentSPO2 = randomIntFromInterval(89,99);

			if(currentDate){
				currentDate = moment(currentDate).subtract(1,'days');
			}else{
				currentDate = moment();
			}

			currentPoint["quantity"] = currentSPO2.toString();
			currentPoint["endDate"] = currentDate;

			sampleData["spo2"].push(currentPoint);
		}
	}

	console.log("**** the end sample data is: " + JSON.stringify(sampleData));


  //sets the right header and status code
  res.end(JSON.stringify(sampleData));
  //outputs string with line end symbol
}).listen(8080, "127.0.0.1");
//sets port and IP address of the server
console.log('Server running at http://127.0.0.1:8080/');
