// Function to motor direction
$(document).ready(function() {

  // Timeout
  $.ajaxSetup({
    timeout: 1500 //Time in milliseconds
  });

  // Refresh data in the interface
  function refreshData(device_id, variable) {
	  $.getq('queue', '/' + device_id +'/' + variable, function(json_data) {

	  	// Temperature
	  	if (json_data[variable]){
	      $("#" + variable + device_id).text(json_data[variable]);
	  	}

	  	// Status
	  	if (json_data.connected){
	  	  $("#status" + device_id).text('Online');
	  	  $("#status" + device_id).css('color', 'green');
	  	}
	  	else {
	       $("#status" + device_id).text('Offline');
	       $("#status" + device_id).css('color', 'red');
	  	}

	  }).fail(function(){
	  	$("#status" + device_id).text('Offline');
	    $("#status" + device_id).css('color', 'red');
	  });
  }
 
  // Refresh interface at the start
  refreshData("1", "temperature");
  refreshData("2", "temperature");
  refreshData("1", "humidity");
  refreshData("2", "humidity");

  // Refresh every 10 seconds
  setInterval(function() {refreshData("1", "temperature");}, 10000);
  setInterval(function() {refreshData("2", "temperature");}, 10000);
  setInterval(function() {refreshData("1", "humidity");}, 10000);
  setInterval(function() {refreshData("2", "humidity");}, 10000);

  // Grab data from the web & display it
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=lublin,poland", 
    crossDomain: true
  }).done(function(result) {
    $("#ext_temp").html((result.main.temp -  273.15).toFixed(2)); 
    $("#ext_humidity").html(result.main.humidity);
  });
 
});