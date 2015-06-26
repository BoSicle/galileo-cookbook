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

// Display chart
app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// Start server
var server = app.listen(3000, function () {

  console.log('App started');

});