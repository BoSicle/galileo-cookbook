// Libraries
var request = require('request');
var mongoose = require('mongoose');

// Connect to database
mongoose.connect('mongodb://localhost/galileo');

// Measurement model
var Measurement = mongoose.model('Measurement', { pin: Number, value: Number, date: Date});

// Print all measurements in console
Measurement.find({}, function(err, measurements) {
  measurements.forEach(function(measurement) {
    console.log(measurement);
  });
});