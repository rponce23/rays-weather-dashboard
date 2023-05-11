var searchButton = $("#buttonSearch");

var APIKey = "dcd22140f5df86c3f85a475b3f9dad9e";


$(function(){
    searchButton.click(function(event){
        event.preventDefault();
        var cityName = $("#citysearch").val();
        var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q='+ cityName +'&appid='+ APIKey + '&units=metric';
        console.log(queryURL);
        fetch(queryURL)
        .then(function(response){
        return response.json();
        })
        .then(function (data) {
        console.log(data);
        });
        
    });

});
