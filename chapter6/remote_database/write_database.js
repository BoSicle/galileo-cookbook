// Libraries
var request = require('request');
var mongoose = require('mongoose');

// Connect to database
mongoose.connect('mongodb://localhost/galileo');

// Measurement model
var Measurement = mongoose.model('Measurement', { pin: Number, value: Number, date: Date});

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
	  });
	} 
});