import React, { useState } from "react";
import WeatherTemp from "./WeatherTemp";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
}

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: "http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  
  function search() {
    const apiKey = "8ae332b284d255af8688a4dfad71bb1a"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  
  if (weatherData.ready) {
    return (
      <div className="Weather">
         <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9 ">
              <input
                type="search"
                placeholder="Enter Town or City Here"
                className="form-control search-input"
                onChange={handleCityChange}
              />
       </div>

       <div className="col-3 p-0">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherTemp data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
        <footer>
          This project was coded by {"Danielle Parker "}
           
          and is{" "}
          <a
            href="https://github.com/carouselcolours/reactweather"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://shecodes-weather.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
