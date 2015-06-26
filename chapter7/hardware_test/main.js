// Includes
var mraa = require("mraa");
var util = require('util');

// Sensor pins
var temp_sensor_pin = new mraa.Aio(0);
temp_sensor_pin.setBit(12);
var light_sensor_pin = new mraa.Aio(1);
light_sensor_pin.setBit(12);

function measure_data() {
    
    // Measure light
    var a = light_sensor_pin.read();
    var light_level = a/4096*100;
    light_level = light_level.toPrecision(4);
    console.log("Light level: " + light_level + " %");

    // Measure temperature
    var b = temp_sensor_pin.read();
    var temperature = (b/4096*5000 - 500) / 10;
    temperature = temperature.toPrecision(4);
    console.log("Temperature: " + temperature + " C");
}

// Send data every 10 seconds
measure_data();
setInterval(measure_data, 10000);
