let celciusTemperature = ""; //just for this to be defined so I can use it in a function
let now = new Date(); //so it can be read from the data offered 

let currentDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]; //looks better wuth three letters - needs HTML adjustment 

let time1 = now.getHours(); //getting right data
let time2 = now.getMinutes(); //getting right data

function numberZero() {
  if (time1 < 10) {
    time1 = `0${time1}`;
  }
  if (time2 < 10) {
    time2 = `0${time2}`;
  }
  return `${time1}:${time2}`;
} //function to add the 0 - stands for itself 

let currentDay = currentDays[now.getDay()];
document.body.innerHTML = document.body.innerHTML.replace(
  "11:05 AM",
  //currentDay + " " + time1 + ":" + time2
  currentDay + " " + numberZero()
); //how does it know the day? - the rest is clear on the HTML replacing 

//let cityInput = document.querySelector("#bigForm"); - not needed?
let searchForm = document.querySelector("#biggerForm"); // What is this? 

function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey = "e49d8a2ceb4c7b4bb750c995e9734044";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude={part}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayForecast);
} //is it important to write cooridinates there? I guess for accessing it? -but yeah, this gets me the data needed 

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
  getForecast(response.data.coord);
  //starting my experimental function to change the do list here: 
  document.getElementById("toDo1").innerHTML = toDo1ideas(); 
  document.getElementById("toDo2").innerHTML = toDo2ideas(); 
  document.getElementById("toDo3").innerHTML = toDo3ideas(); 


  //document.querySelector("toDo1").innerHTML = "Test1";
  //document.body.innerHTML = document.body.innerHTML.replace("Trying out a new sort of 🍧", "test1"); 
} //will I input it here to access the to Do idea HTML?

//toDo111111111111111111-----1111111111111111------1111111111111111111

function toDo1ideas(){
  //if (document.querySelector("#todayTemp").innerHTML < 10) //{ time1 = `0${time1}`;}
 //if (time2 < 10) {time2 = `0${time2}`; }
 //if (document.querySelector("#icon").innerHTML = "01d")
 if (document.getElementById("icon").src == "http://openweathermap.org/img/wn/09d@2x.png") { //rain 09
  return ("Text a friend 📲")}
  if (document.getElementById("icon").src == "http://openweathermap.org/img/wn/01d@2x.png") { //sun 01
  return ("Take a walk 👣")}
  if (document.getElementById("icon").src == "http://openweathermap.org/img/wn/04d@2x.png") { //clouds 2 x 04
  return ("Buy cheese 🧀")}
  if (document.getElementById("icon").src == "http://openweathermap.org/img/wn/02d@2x.png") { //clouds and sun 02
  return ("Create a playlist 💽")}
  if (document.getElementById("icon").src == "http://openweathermap.org/img/wn/03d@2x.png") { //clouds 1 x 03
  return ("Dance to a song 💃🕺")}
  if (document.getElementById("icon").src == "http://openweathermap.org/img/wn/11d@2x.png") { //Storm 11
  return ("Hide under a blanket 👀")}
  if (document.getElementById("icon").src == "http://openweathermap.org/img/wn/01n@2x.png") { //Night 01n
  return ("Watch the stars ✨🔭")}
 else {return("Take a nap 😴")}; 
}

function toDo2ideas(){
 if (document.getElementById("icon").src == "http://openweathermap.org/img/wn/09d@2x.png") { //rain 09
  return ("Read a book 📚")}
  if (document.getElementById("icon").src == "http://openweathermap.org/img/wn/01d@2x.png") { //sun 01
  return ("Eat a salad 🥗")}
  if (document.getElementById("icon").src == "http://openweathermap.org/img/wn/04d@2x.png") { //clouds 2 x 04
  return ("Don't text your ex 😑☝️")}
  if (document.getElementById("icon").src == "http://openweathermap.org/img/wn/02d@2x.png") { //clouds and sun 02
  return ("Wear something bright 👗")}
  if (document.getElementById("icon").src == "http://openweathermap.org/img/wn/03d@2x.png") { //clouds 1 x 03
  return ("Make a card 🖌🌈")}
  if (document.getElementById("icon").src == "http://openweathermap.org/img/wn/11d@2x.png") { //Storm 11
  return ("Stay inside ☝️")}
  if (document.getElementById("icon").src == "http://openweathermap.org/img/wn/01n@2x.png") { //Night 01n
  return ("Prepare your to do list for the next day 📝")}
 else {return("Brush your teeth 🪥")}; 
}

function toDo3ideas(){
  if (document.getElementById("icon").src == "http://openweathermap.org/img/wn/09d@2x.png") { //rain 09
   return ("Clean up 🧹🧽")}
   if (document.getElementById("icon").src == "http://openweathermap.org/img/wn/01d@2x.png") { //sun 01
   return ("Call a friend 📲")}
   if (document.getElementById("icon").src == "http://openweathermap.org/img/wn/04d@2x.png") { //clouds 2 x 04
   return ("List the top 5 things about yourself 👑")}
   if (document.getElementById("icon").src == "http://openweathermap.org/img/wn/02d@2x.png") { //clouds and sun 02
   return ("Write into your diary 📖✍️")}
   if (document.getElementById("icon").src == "http://openweathermap.org/img/wn/03d@2x.png") { //clouds 1 x 03
   return ("Cook something yummy 🍝🤤")}
   if (document.getElementById("icon").src == "http://openweathermap.org/img/wn/11d@2x.png") { //Storm 11
   return ("Watch a movie 🎥🍿")}
   if (document.getElementById("icon").src == "http://openweathermap.org/img/wn/01n@2x.png") { //Night 01n
   return ("Reflect on the day 🧐")}
  else {return("Make a wish 🧞‍♂️")}; 
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
} //Why did I get that twice? Seems not right. Maybe the other one is just for the log?
//axios.get(myUrl).then(search);

searchForm.addEventListener("submit", search); 

document.getElementById("bigButton").addEventListener("click", search); //these two help me with starting the search function in both ways

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
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let temperatureElement = document.querySelector("#todayTemp");
  let fahrenheitTemperature = (celciusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#todayTemp");
  temperatureElement.innerHTML = Math.round(celciusTemperature);
}

let fahrenheitLink = document.querySelector("#fahrenheitLink");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsiusLink");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[day];
}

function displayForecast(response) {
  let forecast = response.data.daily;
  forecastElement = document.querySelector("#forecast");
  let forecastHTML = "";
  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `<ul class="list-group list-group-flush">
                    <li class="list-group-item" ><span class"weather-forecast-date">${formatDay(
                      forecastDay.dt
                    )}:</span><img class="pic" src="http://openweathermap.org/img/wn/${
          forecastDay.weather[0].icon
        }@2x.png"/><span class="weather-forecast-temperatures"><span class="weather-forecast-temperature-min">  ${Math.round(
          forecastDay.temp.min
        )}°C</span>/<span class="weather-forecast-temperature-max">${Math.round(
          forecastDay.temp.max
        )}°C</span></span> </li>
                    
                  </ul>`;
    }
  });
  forecastElement.innerHTML = forecastHTML;
} 

//displayForecast();

//<li class="list-group-item">Saturday: 13°C/20°C 🌥</li>
//                    <li class="list-group-item">Sunday: 15°C/22°C ☀</li>
//                   <li class="list-group-item">Monday: 19°C/25°C ☀</li>
//                    <li class="list-group-item">Tuesday: 19°C/27°C 🌩</li>
//test test