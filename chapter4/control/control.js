// Required modules
var m = require("mraa");
var util = require('util');

var express = require('express');
var app = express();

// Set output on pin 7
var myDigitalPin = new m.Gpio(7);
myDigitalPin.dir(m.DIR_OUT);

// Routes
app.get('/on', function (req, res) {
  myDigitalPin.write(1);
  res.send('Pin 7 is on');
});

app.get('/off', function (req, res) {
  myDigitalPin.write(0);
  res.send('Pin 7 is off');
});

// Start server
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Express app started!");

});