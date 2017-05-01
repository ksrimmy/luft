$( document ).ready(function() {
$.ajax({
    url: "https://api.luftdaten.info/v1/sensor/1359/",
    type: "GET",
    cache: false,
    dataType: "json"
}).done(function(data) {
    console.log(data);

    for(var i = 0; i < 5; i++) {
        if (data[i].sensordatavalues.length > 1) {
            document.getElementById("temperature").innerHTML = data[i].sensordatavalues[0].value + " °C";
            document.getElementById("humidity").innerHTML = data[i].sensordatavalues[1].value + " %";
            break;
        }
    }

});
$.ajax({
    url: "https://api.luftdaten.info/v1/sensor/1358/",
    type: "GET",
    cache: false,
    dataType: "json"
}).done(function(data) {
    console.log(data);

    for(var i = 0; i < 5; i++) {
        if (data[i].sensordatavalues.length > 1) {
            document.getElementById("pm10").innerHTML =data[i].sensordatavalues[0].value + " µg/m³";
            document.getElementById("pm25").innerHTML = data[i].sensordatavalues[1].value + " µg/m³";
            break;
        }
    }

});
});
