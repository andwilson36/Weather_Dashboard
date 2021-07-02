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

function init() {
    recentList.style.display = 'none';
    lrgDisplay.style.display = 'none';
}

init();
