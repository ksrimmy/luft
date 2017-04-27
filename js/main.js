$.ajax({
    url: "http://api.luftdaten.info/v1/sensor/1359/",
    type: "GET",
    cache: false,
    dataType: "json"
}).done(function(data) {
    var temperautre = $("#temperature");
    var humidity = $("#humidity");
    console.log(data);

    for(var i = 0; i < 5; i++) {
        if (data[i].sensordatavalues.length > 1) {
            temperature.append(data[i].sensordatavalues[0].value + " °C");
            humidity.append(data[i].sensordatavalues[1].value + " %");
            break;
        }
    }

});
$.ajax({
    url: "http://api.luftdaten.info/v1/sensor/1358/",
    type: "GET",
    cache: false,
    dataType: "json"
}).done(function(data) {
    var pm10 = $("#pm10");
    var pm25 = $("#pm25");
    console.log(data);

    for(var i = 0; i < 5; i++) {
        if (data[i].sensordatavalues.length > 1) {
            pm10.append(data[i].sensordatavalues[0].value + " µg/m³");
            pm25.append(data[i].sensordatavalues[1].value + " µg/m³");
            break;
        }
    }

});