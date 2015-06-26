var express = require('express');
var app = express();
var request = require('request');

app.get('/', function (req, res) {

  // Make request to Galileo server
  request_options = {
  	url: 'http://192.168.1.103:3000/api/analog/read?pin=0',
  	json: true
  }
  request(request_options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // Display results in a nice way
      res.send("The state of pin " + body.pin + " is " + body.value + ".");
    } 
  });

});

var server = app.listen(3000, function () {

  console.log('App started');

});