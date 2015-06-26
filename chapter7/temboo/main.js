// Includes
var mraa = require("mraa");
var util = require('util');
var tsession = require("temboo/core/temboosession");
var session = new tsession.TembooSession("your_temboo_username", "your_app_name", "your_app_key");

// Sensor pins
var temp_sensor_pin = new mraa.Aio(0);
temp_sensor_pin.setBit(12);
var light_sensor_pin = new mraa.Aio(1);
light_sensor_pin.setBit(12);

var Google = require("temboo/Library/Google/Spreadsheets");

var appendRowChoreo = new Google.AppendRow(session);

// Instantiate and populate the input set for the choreo
var appendRowInputs = appendRowChoreo.newInputSet();

function send_data() {
    
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

    // Date
    var d = new Date();
    var date = d.toString();

    // Set inputs
    appendRowInputs.set_ClientSecret("google_client_secret");
    appendRowInputs.set_RefreshToken("google_client_token");
    appendRowInputs.set_RowData(date + "," + temperature + "," + light_level);
    appendRowInputs.set_SpreadsheetTitle("spreadsheet_title");
    appendRowInputs.set_ClientID("google_client_id");

    // Run the choreo, specifying success and error callback handlers
    appendRowChoreo.execute(
        appendRowInputs,
        function(results){console.log(results.get_Response());},
        function(error){console.log(error.type); console.log(error.message);}
    );
}

// Send data every 10 seconds
send_data();
setInterval(send_data, 10000);