// Required modules
var m = require("mraa");
var util = require('util');

var express = require('express');
var app = express();

// Set input on pin 7
var myDigitalPin = new m.Gpio(7);
myDigitalPin.dir(m.DIR_IN);

// Routes
app.get('/read', function (req, res) {
  var myDigitalValue =  myDigitalPin.read();
  res.send("Digital pin 7 value is: " + myDigitalValue);
});

// Start server
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Express app started!");

});