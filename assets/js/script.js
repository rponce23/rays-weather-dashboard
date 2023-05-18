var searchButton = $("#buttonSearch");

var APIKey = "dcd22140f5df86c3f85a475b3f9dad9e";


$(function(){
    searchButton.click(function(event){
        event.preventDefault();
        var cityName = $("#citysearch").val();
        var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q='+ cityName +'&appid='+ APIKey + '&units=metric';
        console.log(queryURL);
        
        fetch(queryURL).then(function(response){
        return response.json().then(function(data){
            console.log(data);
            $('#cityName').html(data.name);
            $('#currentDate').html(dayjs.unix(data.dt).format('MMM D, YYYY'));
            var wicon = data.weather[0].icon;
            var iconURL = "https://openweathermap.org/img/wn/" + wicon + "@2x.png";
            $('#currentIcon').attr("src", iconURL);
        })
        
        
        })
       

        
        
    });

});
