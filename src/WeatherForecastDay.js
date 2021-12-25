import React from "react";
import WeatherIcons from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000)
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }
  function maxTemp(){
    let max = Math.round(props.data.temp.max);
    return `${max}°`;
  }
  function minTemp(){
let min = Math.round(props.data.temp.min);
return `${min}°`
  }
  return (
    <div className="day">
      <div>{day()}</div>
      <WeatherIcons code={props.data.weather[0].icon} size={30} />
      <span className="forecast-temp"><strong>{maxTemp()}</strong></span> <span className="forecast-temp">{minTemp()}</span>
    </div>
  );
}