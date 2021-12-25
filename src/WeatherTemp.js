import React from "react";
import WeatherIcons from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import FormatedDate from "./FormatedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <h2>{props.data.cityName}</h2>
      <FormatedDate date={props.data.date} />
      <h3 className="text-capitalize">{props.data.description}</h3>
      <div className="row main">
        <div className="col-sm-6">
          <WeatherIcons className="icon" code={props.data.icon} size={60} />
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