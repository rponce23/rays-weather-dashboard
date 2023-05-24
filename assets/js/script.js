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
            
            for(var i=0; i<fdata.list.length; i=i+8){
                var date = dayjs.unix(fdata.list[i].dt).format('MMM D, YYYY');
                console.log(date);
                console.log(i);
                $('#fday'+ i).html(date);
                
                var fwicon = fdata.list[i].weather[0].icon;
                var ficonURL = "https://openweathermap.org/img/wn/" + fwicon + "@2x.png";
                $('#forecastIcon'+i).attr("src", ficonURL);
                $('#forecastTemp'+ i).html("Temp: "+ fdata.list[i].main.temp+ " °C");
                $('#forecastWind'+ i).html("Wind : "+ fdata.list[i].wind.speed + " Km/h");
                $('#forecastHum'+ i).html("Humidity : "+ fdata.list[i].main.humidity + " %")
            }
        })
    })
}

function storeData(city){
    localStorage.setItem("cityNames", city)
}

