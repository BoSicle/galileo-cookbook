function measure() {

    // Make measurements
    $.get("/make_measurement", function( data ) {

        // Get measurements from database
        $.get( "/measurements", function( data ) {

          // Format data
          console.log(data);
          plot_data = [];
          for (var i = 0; i < data.length; i++) {
            plot_data.push(data[i].value);
          } 

          // Plot
          $('#container').highcharts({
                title: {
                    text: 'Analog Pin A0 Measurements',
                    x: -20 //center
                },
                yAxis: {
                    title: {
                        text: 'Value'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '°C'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name: 'Measurements',
                    data: plot_data
                }]
            });

        });

    });

}

// Measure every 5 seconds
measure();
setInterval(measure, 5000);
