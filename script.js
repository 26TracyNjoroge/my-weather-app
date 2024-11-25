const cityEl = document.querySelector("#weather-app-city");
const searchFormEl = document.querySelector("#search-form");

function updateWeather(response) {
    let tempValueEl = document.querySelector("#weather-temperature-value");
    let humidityEl = document.querySelector("#humidity");
    let windSpeedEl = document.querySelector("#wind-speed");
    let descriptionEl = document.querySelector("#weather-description");
    let iconEl = document.querySelector("#icon");
    let dateEl = document.querySelector("#weather-date");
    let cityEl = document.querySelector("#weather-app-city");


    // console.log(response.data)
    let timestamp = response.data.time
    let date = new Date(timestamp * 1000);

    let currentTemprature = Math.round(response.data.temperature.current);
    let humidity = response.data.temperature.humidity;
    let windSpeed = response.data.wind.speed;
    let description = response.data.condition.description;
    let icon = `<img src="${response.data.condition.icon_url}" class="weather-icon" />`;
    let city = response.data.city;

    humidityEl.innerHTML = `${humidity}%`;
    windSpeedEl.innerHTML = `${windSpeed}km/h`;
    tempValueEl.innerHTML = currentTemprature;
    descriptionEl.innerHTML = description;
    iconEl.innerHTML = icon;
    cityEl.innerHTML = city;
    dateEl.innerHTML = formatDate(date);
}

function formatDate(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = [
        "Sunday", 
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday"
    ];

    let day = days[date.getDay()];

    if(minutes < 10) {
        minutes = `0${minutes}`;
    }
    if(hours < 10) {
        hours = `0${hours}`;
    }

    return `${day} ${hours}:${minutes}`
}

function searchCity(city) {
    let apiKey = "db90o24154efb0eb442t9a7ef39fdafd";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateWeather);
 }

function handleSearchSubmit(event) {
    event.preventDefault();
    let inputValue = document.querySelector("#search-form-input").value;
    searchCity(inputValue)
}

searchFormEl.addEventListener("submit", handleSearchSubmit);

searchCity("Nairobi");

