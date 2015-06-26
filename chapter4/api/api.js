// Required modules
var m = require("mraa");
var util = require('util');

var express = require('express');
var app = express();

// API routes
app.get('/api/read', function (req, res) {

  // Get pin
  var pin = req.query.pin;

  // Return value
  var myDigitalPin = new m.Gpio(parseInt(pin));
  myDigitalPin.dir(m.DIR_IN);	
  var myDigitalValue =  myDigitalPin.read();
  res.json({"pin": pin, "value" : myDigitalValue});

});

app.get('/api/write', function (req, res) {
    
  // Get pin
  var pin = req.query.pin;
  var value = req.query.value;
    
  // Return value
  var myDigitalPin = new m.Gpio(parseInt(pin));
  myDigitalPin.dir(m.DIR_OUT);    
  myDigitalPin.write(parseInt(value));    
  res.json({"pin": pin, "value" : value});
});

// Start server
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Express app started!");

});