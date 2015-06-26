// Libraries
var express = require('express');
var app = express();
var request = require('request');
var mongoose = require('mongoose');
var path = require('path');

// Set public folder
app.use(express.static(__dirname + '/public'));

// Connect to database
mongoose.connect('mongodb://localhost/galileo');

// Measurement model
var Measurement = mongoose.model('Measurement', { pin: Number, value: Number, date: Date});

// Get measurements
app.get('/measurements', function (req, res) {

  // Get all measurements
  Measurement.find({}, function(err, measurements) {
  	res.json(measurements);
  });
});

app.get('/make_measurement', function (req, res) {

	// Prepare request to Galileo server
	request_options = {
		url: 'http://192.168.1.103:3000/api/analog/read?pin=0',
		json: true
	}

	// Make request to Galileo server
	request(request_options, function (error, response, body) {
		if (!error && response.statusCode == 200) {

		  // Get time
		  var currentTime = new Date();
		  
		  // Store in database
		  var data_point = new Measurement({ pin: parseInt(body.pin), value: parseInt(body.value), date: currentTime});
		  data_point.save(function (err) {
		    console.log('Measurement stored in database');
		    res.json({result: 'Measurement stored'});
		  });
		} 
	});

});

// Display chart
app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// Start server
var server = app.listen(3000, function () {

  console.log('App started');

});