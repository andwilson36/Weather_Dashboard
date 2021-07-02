// variables
// search column
var searchForm = document.querySelector('.search-form');
var searchBtn = document.querySelector('.btn');
var recentList = document.querySelector('.city-list');
var city1 = document.querySelector('.cli1');
var city2 = document.querySelector('.cli2');
var city3 = document.querySelector('.cli3');
var city4 = document.querySelector('.cli4');
var city5 = document.querySelector('.cli5');
// large display
var lrgDisplay = document.querySelector('.info-col');
var currCity = document.querySelector('.city-header');
var temp = document.querySelector('.temp-ili');
var wind = document.querySelector('.wind-ili');
var humid = document.querySelector('.humid-ili');
var UV = document.querySelector('.UV');
// 5 day forecast
var tomorrow = document.querySelector('.tomorrow');
var day2 = document.querySelector('.day2');
var day3 = document.querySelector('.day3');
var day4 = document.querySelector('.day4');
var day5 = document.querySelector('.day5');
// api 
var currWeatherStart = 'https://api.openweathermap.org/data/2.5/weather?q=';
var uvStart = 'http://api.openweathermap.org/data/2.5/solar_radiation?lat=';
var uvMid = '&lon=';
var searchedCity = 'Austin';
// *api key ccadae41918cefef966b68447d483afa
var apiKey = '&appid=ccadae41918cefef966b68447d483afa';
var weatherData;
var uvIndex;
var lat = '';
var lon = '';
// when search btn is pressed
searchBtn.addEventListener('click', function (event) {
    var api = currWeatherStart + searchedCity + apiKey;
    fetch(api, {})
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            weatherData = data;
            getUV(weatherData);
        })
})

function displayInfo(data) {
    lrgDisplay.style.display = 'inline';
    currCity.textContent = data.name;
    temp.textContent = 'Temp: ' + Math.round((data.main.temp - 273.15) * 9/5 + 32) * 1 + String.fromCharCode(176) + 'F';
    wind.textContent = 'Wind: ' + Math.round(data.wind.speed * 2.237) * 1  + ' MPH';
    humid.textContent = 'Humidity: ' + data.main.humidity + '%';
    UV.textContent = 'UV Index: '; 
}
// !need the correct api this does not work!
function getUV(data) {
    lat = data.coord.lat.toString();
    lon = data.coord.lon.toString();
    var api = uvStart + lat + uvMid + lon + apiKey;
    fetch(api, {})
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            
})

}

// loads on start or reload
function init() {
    recentList.style.display = 'none';
    lrgDisplay.style.display = 'none';
}

// when page loads 
init();
