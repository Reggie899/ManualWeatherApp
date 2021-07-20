let celciusTemperature = "";
let now = new Date();

let currentDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let time1 = now.getHours();
let time2 = now.getMinutes();

function numberZero() {
  if (time1 < 10) {
    time1 = `0${time1}`;
  }
  if (time2 < 10) {
    time2 = `0${time2}`;
  }
  return `${time1}:${time2}`;
}

let currentDay = currentDays[now.getDay()];
document.body.innerHTML = document.body.innerHTML.replace(
  "11:05 AM",
  //currentDay + " " + time1 + ":" + time2
  currentDay + " " + numberZero()
);

//let cityInput = document.querySelector("#bigForm");
let searchForm = document.querySelector("#biggerForm");

function todayTemp(response) {
  console.log(response.data);
  document.querySelector("#cityDisplay1").innerHTML = response.data.name;
  document.querySelector("#todayTemp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#descritpion").innerHTML =
    response.data.weather[0].main;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#min").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#max").innerHTML = Math.round(
    response.data.main.temp_max
  );
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  celciusTemperature = response.data.main.temp;
}

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#bigForm").value;
  let apiKey = "e49d8a2ceb4c7b4bb750c995e9734044";
  let myUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
  axios.get(myUrl).then(todayTemp);
  //let cityElement = document.querySelector("#cityDisplay1");
  //let cityInput = document.querySelector("#bigForm");
  //let searchForm = document.querySelector("#biggerForm");
  //cityElement.innerHTML = cityInput.value;
}
//axios.get(myUrl).then(search);

searchForm.addEventListener("submit", search);

document.getElementById("bigButton").addEventListener("click", search);

//function showTemperature(response) {
//console.log(response);
//let cityTemp = Math.round(cityInput.response.data.main.temp);
//let tempDisplay = document.querySelector("#todayTemp");
//tempDisplay.innerHTML = Math.round(response.data);
//}

//axios.get(`${apiUrl}&appid=${apiKey}`).then(showTempterature);
//axios.get(apiUrl).then(showTemperature);

//let currentDayTemp = cityInput;
//document.body.innerHTML = document.body.innerHTML.replace(
// "#tempDisplay",
//currentDayTemp
//);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#todayTemp");
  temperatureElement.innerHTML = temperature;
}

let city = document.querySelector("#bigForm");

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#todayTemp");
  let fahrenheitTemperature = (celciusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

let fahrenheitLink = document.querySelector("#fahrenheitLink");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);
