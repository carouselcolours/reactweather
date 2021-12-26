import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <h2>{props.data.cityName}</h2>
      <FormattedDate date={props.data.date} />
      <h3 className="text-capitalize">{props.data.description}</h3>
      <div className="row main">
        <div className="col-sm-6">
          <WeatherIcon className="icon" code={props.data.icon} size={60} />
          <WeatherTemp fahr={props.data.temp} />
        </div>
        <div className="col-sm-6">
          <ul>
            <li>Humidity {props.data.humidity}%</li>
            <li>Wind {props.data.wind} km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}