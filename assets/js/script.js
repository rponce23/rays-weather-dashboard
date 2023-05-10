var APIKey = "dcd22140f5df86c3f85a475b3f9dad9e";
var city = 'Monterrey';
var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid='+ APIKey;

var testQuery = function(){
    fetch(queryURL)
    .then(function(response){
        return response.json();
    })
    .then(function (data) {
        console.log(data);
      });
};

testQuery();
