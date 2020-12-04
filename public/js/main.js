const api = {
  key: "30484121c8d961e97bba6d66a61d29f2",
  base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

function getResults (query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weather_1 = document.querySelector('.current .weather');
  weather_1.innerText = weather.weather[0].main;
  if (weather.weather[0].main == "Clouds"){
    console.log("lol");
  }
  let temperature = document.querySelector('.temp-degres');
  temperature.innerText = `Min ${Math.round(weather.main.temp_min)}  °c / ${Math.round(weather.main.temp_max)} Max °c`;
}

function dateBuilder (d) {
  let months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"];
  let days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "jeudi", "Vendredi", "Samedi"];

  
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
