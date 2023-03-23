// JavaScript for Weather Dashboard

// API key
const apiKey = "aedd7767a4afa18221b35dcee4cd935c";

// Get the search form, search input, and search history elements
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchHistory = document.getElementById("history");

// Get the weather sections
const todayWeather = document.getElementById("today");
const forecastWeather = document.getElementById("forecast");

// Create an empty array to store the search history
let history = [];

// Retrieve the search history from local storage
if (localStorage.getItem("weatherHistory")) {
  history = JSON.parse(localStorage.getItem("weatherHistory"));
  showHistory(history);
}


// Get current weather data for a city
    //Display city name
    //Display Date
    //Display weather icon
    //Display Temperature
    //Display Humidity
    //Display wind speed

// Get 5-day forecast for a city

