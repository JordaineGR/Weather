function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");

  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
}

function searchCity(city) {
  let apiKey = "f59of3bc0634b982da3taabda665c640";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  console.log(searchInput.value);
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");

searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Port of Spain");
