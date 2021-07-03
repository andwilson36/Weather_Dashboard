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
var recentArray = [];
// large display
var lrgDisplay = document.querySelector('.info-col');
var currCity = document.querySelector('.city-header');
var temp = document.querySelector('.temp-ili');
var wind = document.querySelector('.wind-ili');
var humid = document.querySelector('.humid-ili');
var UV = document.querySelector('.UV');
// 5 day forecast
var fore1 = document.getElementById('day1-text');
var foreList1 = document.createElement('ul');
var foreTemp1 = document.createElement('li');
var foreWind1 = document.createElement('li');
var foreHumid1 = document.createElement('li');
fore1.appendChild(foreList1);
foreList1.append(foreTemp1);
foreList1.append(foreWind1);
foreList1.append(foreHumid1);
var fore2 = document.getElementById('day2-text');
var foreList2 = document.createElement('ul');
var foreTemp2 = document.createElement('li');
var foreWind2 = document.createElement('li');
var foreHumid2 = document.createElement('li');
fore2.appendChild(foreList2);
foreList2.append(foreTemp2);
foreList2.append(foreWind2);
foreList2.append(foreHumid2);
var fore3 = document.getElementById('day3-text');
var foreList3 = document.createElement('ul');
var foreTemp3 = document.createElement('li');
var foreWind3 = document.createElement('li');
var foreHumid3 = document.createElement('li');
fore3.appendChild(foreList3);
foreList3.append(foreTemp3);
foreList3.append(foreWind3);
foreList3.append(foreHumid3);
var fore4 = document.getElementById('day4-text');
var foreList4 = document.createElement('ul');
var foreTemp4 = document.createElement('li');
var foreWind4 = document.createElement('li');
var foreHumid4 = document.createElement('li');
fore4.appendChild(foreList4);
foreList4.append(foreTemp4);
foreList4.append(foreWind4);
foreList4.append(foreHumid4);
var fore5 = document.getElementById('day5-text');
var foreList5 = document.createElement('ul');
var foreTemp5 = document.createElement('li');
var foreWind5 = document.createElement('li');
var foreHumid5 = document.createElement('li');
fore5.appendChild(foreList5);
foreList5.append(foreTemp5);
foreList5.append(foreWind5);
foreList5.append(foreHumid5);
// api 
var getCoordStart = 'https://api.openweathermap.org/data/2.5/weather?q=';
var oneCallStart = 'https://api.openweathermap.org/data/2.5/onecall?lat=';
var oneCallMid = '&lon=';
var searchedCity = '';
// *api key ccadae41918cefef966b68447d483afa
var apiKey = '&appid=ccadae41918cefef966b68447d483afa';
var lat = '';
var lon = '';

// when search btn is pressed
searchBtn.addEventListener('click', function (event) {
    searchedCity = document.querySelector('.search-form').value;
    var api = getCoordStart + searchedCity + apiKey;
    fetch(api, {})
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            getUV(data);
            setRecentList();
        })
})

// loads on start or reload
function init() {
    recentList.style.display = 'none';
    city1.style.display = 'none';
    city2.style.display = 'none';
    city3.style.display = 'none';
    city4.style.display = 'none';
    city5.style.display = 'none';
    lrgDisplay.style.display = 'none';
    getRecentList(); 
}

function getUV(coord) {
    lat = coord.coord.lat.toString();
    lon = coord.coord.lon.toString();
    var api = oneCallStart + lat + oneCallMid + lon + apiKey;
    fetch(api, {})
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayInfo(data);
            getForecast(data);
})

}

function displayInfo(data) {
    lrgDisplay.style.display = 'inline';
    currCity.textContent = searchedCity;
    temp.textContent = 'Temp: ' + Math.round((data.current.temp - 273.15) * 9/5 + 32) * 1 + String.fromCharCode(176) + 'F';
    wind.textContent = 'Wind: ' + Math.round(data.current.wind_speed * 2.237) * 1  + ' MPH';
    humid.textContent = 'Humidity: ' + data.current.humidity + '%';
    UV.textContent = 'UV Index: ' + data.current.uvi; 
}

function getForecast(data) {
    forecast1(data);
    forecast2(data);
    forecast3(data);
    forecast4(data);
    forecast5(data);
}

function forecast1(data) {
    var cardHead = document.querySelector('.header-1');
    cardHead.textContent = 'Tomorrow';
    foreTemp1.textContent = 'Temp: ' + Math.round((data.daily[0].temp.day  - 273.15) * 9/5 + 32) * 1 + String.fromCharCode(176) + 'F';
    foreWind1.textContent = 'Wind: ' + Math.round(data.daily[0].wind_speed  * 2.237) * 1  + ' MPH';
    foreHumid1.textContent = 'Humidity: ' + data.daily[0].humidity + '%';
    foreList1.setAttribute('style', 'list-style:none; font-size:20px; white-space:nowrap; padding-left:0px');
}

function forecast2(data) {
    var cardHead = document.querySelector('.header-2');
    var day2 = moment().add(2, 'day').format('dddd');
    cardHead.textContent = day2;
    foreTemp2.textContent = 'Temp: ' + Math.round((data.daily[1].temp.day  - 273.15) * 9/5 + 32) * 1 + String.fromCharCode(176) + 'F';
    foreWind2.textContent = 'Wind: ' + Math.round(data.daily[1].wind_speed  * 2.237) * 1  + ' MPH';
    foreHumid2.textContent = 'Humidity: ' + data.daily[1].humidity + '%';
    foreList2.setAttribute('style', 'list-style:none; font-size:20px; white-space:nowrap; padding-left:0px');
}

function forecast3(data) {
    var cardHead = document.querySelector('.header-3');
    var day3 = moment().add(3, 'day').format('dddd');
    cardHead.textContent = day3;
    foreTemp3.textContent = 'Temp: ' + Math.round((data.daily[2].temp.day  - 273.15) * 9/5 + 32) * 1 + String.fromCharCode(176) + 'F';
    foreWind3.textContent = 'Wind: ' + Math.round(data.daily[2].wind_speed  * 2.237) * 1  + ' MPH';
    foreHumid3.textContent = 'Humidity: ' + data.daily[2].humidity + '%';
    foreList3.setAttribute('style', 'list-style:none; font-size:20px; white-space:nowrap; padding-left:0px');
}

function forecast4(data) {
    var cardHead = document.querySelector('.header-4');
    var day4 = moment().add(4, 'day').format('dddd');
    cardHead.textContent = day4;
    foreTemp4.textContent = 'Temp: ' + Math.round((data.daily[3].temp.day  - 273.15) * 9/5 + 32) * 1 + String.fromCharCode(176) + 'F';
    foreWind4.textContent = 'Wind: ' + Math.round(data.daily[3].wind_speed  * 2.237) * 1  + ' MPH';
    foreHumid4.textContent = 'Humidity: ' + data.daily[3].humidity + '%';
    foreList4.setAttribute('style', 'list-style:none; font-size:20px; white-space:nowrap; padding-left:0px');
}

function forecast5(data) {
    var cardHead = document.querySelector('.header-5');
    var day5 = moment().add(5, 'day').format('dddd');
    cardHead.textContent = day5;
    foreTemp5.textContent = 'Temp: ' + Math.round((data.daily[4].temp.day  - 273.15) * 9/5 + 32) * 1 + String.fromCharCode(176) + 'F';
    foreWind5.textContent = 'Wind: ' + Math.round(data.daily[4].wind_speed  * 2.237) * 1  + ' MPH';
    foreHumid5.textContent = 'Humidity: ' + data.daily[4].humidity + '%';
    foreList5.setAttribute('style', 'list-style:none; font-size:20px; white-space:nowrap; padding-left:0px');
}

function setRecentList() {
    console.log(recentArray);
    if(recentArray === null) {
        localStorage.setItem('cities', JSON.stringify(searchedCity));
    } else if(recentArray.length === 5) {
        recentArray.pop();
        recentArray.unshift(searchedCity);
        localStorage.setItem('cities', JSON.stringify(recentArray));
    } else {
        recentArray.unshift(searchedCity);
        localStorage.setItem('cities', JSON.stringify(recentArray));
    }
    getRecentList();
}

function getRecentList() {
    if(localStorage.getItem('cities') !== null) {
        recentArray = JSON.parse(localStorage.getItem('cities'));
        console.log(recentArray);
        if(recentArray.length === 5) {
            recentList.style.display = 'block';
            city1.style.display = 'block';
            city2.style.display = 'block';
            city3.style.display = 'block';
            city4.style.display = 'block';
            city5.style.display = 'block';
    
            city1.textContent = recentArray[0];
            city2.textContent = recentArray[1];
            city3.textContent = recentArray[2];
            city4.textContent = recentArray[3];
            city5.textContent = recentArray[4];
        } else if(recentArray.length === 4) {
            recentList.style.display = 'block';
            city1.style.display = 'block';
            city2.style.display = 'block';
            city3.style.display = 'block';
            city4.style.display = 'block';
    
            city1.textContent = recentArray[0];
            city2.textContent = recentArray[1];
            city3.textContent = recentArray[2];
            city4.textContent = recentArray[3];
        } else if(recentArray.length === 3) {
            recentList.style.display = 'block';
            city1.style.display = 'block';
            city2.style.display = 'block';
            city3.style.display = 'block';
    
            city1.textContent = recentArray[0];
            city2.textContent = recentArray[1];
            city3.textContent = recentArray[2];
        } else if(recentArray.length === 2) {
            recentList.style.display = 'block';
            city1.style.display = 'block';
            city2.style.display = 'block';
    
            city1.textContent = recentArray[0];
            city2.textContent = recentArray[1];
        } else {
            recentList.style.display = 'block';
            city1.style.display = 'block';
    
            city1.textContent = recentArray[0];
        } 
    }
}

// when page loads 
init();
