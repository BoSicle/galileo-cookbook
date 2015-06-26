// Device ID & secret
var device_id = "device_id";
var device_secret = "device_secret";

// Required modules
var m = require("mraa");
var util = require('util');
var mqtt    = require('mqtt');

var client = mqtt.createClient(1883, "178.62.108.47", {
    username: device_id,
    password: device_secret,
    clientId: "7393956449"
});

// Set output on pin 7
var myDigitalPin = new m.Gpio(7);
myDigitalPin.dir(m.DIR_OUT);

// Topics
in_topic  = 'devices/' + device_id + '/get';
out_topic = 'devices/' + device_id + '/set';
 
 // Connect event
client.on('connect', function () {
  client.subscribe(in_topic);
});

// When message is received
client.on('message', function (topic, message) {
  
  // Message is Buffer 
  console.log(message.toString());

  json_data = JSON.parse(message.toString());

  // Check the status property value
  var value = json_data['properties'][0]['value']

  if (value == 'on') {
    myDigitalPin.write(1);
  }
  if (value == 'off') {
    myDigitalPin.write(0);
  }
  
  // Confirm to Lelylan
  client.publish(out_topic, message.toString())
});