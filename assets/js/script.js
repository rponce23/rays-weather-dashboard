var searchButton = $("#buttonSearch");
var APIKey = "dcd22140f5df86c3f85a475b3f9dad9e";

$(function(){
    searchButton.click(function(event){
        event.preventDefault();
        var cityName = $("#citysearch").val();
        var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q='+ cityName +'&appid='+ APIKey + '&units=metric';
        // console.log(queryURL);
        
        fetch(queryURL).then(function(response){
        return response.json().then(function(data){
            // console.log(data);
            $('#cityName').html(data.name);
            $('#currentDate').html(dayjs.unix(data.dt).format('MMM D, YYYY'));
            var wicon = data.weather[0].icon;
            var iconURL = "https://openweathermap.org/img/wn/" + wicon + "@2x.png";
            $('#currentIcon').attr("src", iconURL);
            $('#currentTemp').html("Temperature: " + data.main.temp + " °C");
            $('#currentHum').html("Humidity: " + data.main.humidity + " %");
            $('#currentWind').html("Wind Speed: " + data.wind.speed + " Km/h");
            var lon = data.coord.lon;
            var lat = data.coord.lat;
            // var lon = '10.99';
            // var lat = '44.34';

            var coordcity = lat.toString() + " " + lon.toString();

            forecastWeather(lat, lon);


            })
        })
    });

});

function forecastWeather(lat, lon){
    var forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid='+ APIKey + '&units=metric';
    fetch(forecastURL).then(function(response){
        return response.json().then(function(fdata){
            console.log(fdata);
            for(var i=1; i<6; i++){

            }

        })
    })
}


