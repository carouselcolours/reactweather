import React, { useState } from "react"
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./WeatherForecast";

import "./Weather.css"

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState("Sydney");
  

  function getWeather(response){
    console.log(response)
    setWeather({
      ready: true,
      cityName: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      temp: Math.round(response.data.main.temp),
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
      coord: response.data.coord
    });
  }
  
  function getCity() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ae332b284d255af8688a4dfad71bb1a&units=imperial`;
 axios.get(apiUrl).then(getWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    getCity();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
if (weather.ready) {
  return (
    <div className="weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Search"
              className="w-100"
              onChange={updateCity}
            />
          </div>
          <div className="col-4">
            <input type="submit" value="Search" className="w-100" />
          </div>
        </div>
      </form>
      <WeatherInfo data={weather}/>
      <Forecast data={weather} />
    </div>
  );
} else {
getCity();
  return (
<h2>Loading...</h2>
  )}}