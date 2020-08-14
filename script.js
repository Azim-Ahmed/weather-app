const api = {
  key : "3d2ff5694571bed73dc4628badc7f210",
  base: "http://api.openweathermap.org/data/2.5/"
}
const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress',setQuery);
function setQuery(evt){
  if (evt.keyCode ==13) {
    getResults(searchBox.value);
console.log(searchBox.value);    
  }
}
function getResults(query){
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  .then(weather => {
    return weather.json()
  }).then(displayResults)
}
 function displayResults(weather){
   //console.log(weather);
   let city = document.querySelector('.location .city')
   city.innerText= `${weather.name}, ${weather.sys.country}`
   let now = new Date();
   let date = document.querySelector('.location .date')
   date.innerText =datebuilder(now);

   let temp = document.querySelector('.current .temp')
   temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`


   let weather_el = document.querySelector('.current .weather')
   weather_el.innerText = weather.weather[0].main;

   let hilow = document.querySelector('.high-low');
   hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`
 }
 function datebuilder(d){
   let months = ["january","February", "March", "April", "May", "june", "July", "August", "september","October", "November", "december"]
let days = [ "Sunday", "Monday", "Tuesday",  "wednesday", "Thursday", "Friday","Saturday"]

let day = days[d.getDay()]
let date = d.getDate()
let month = months[d.getMonth()]
let year = d.getFullYear()
return `${day} ${date} ${month} ${year} `

  }