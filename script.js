const cityEl = document.querySelector("#weather-app-city");
const searchFormEl = document.querySelector("#search-form")

function handleSearchSubmit(event) {
    event.preventDefault();
    let inputValue = document.querySelector("#search-form-input").value;
    cityEl.innerHTML = inputValue;
}

searchFormEl.addEventListener("submit", handleSearchSubmit);

