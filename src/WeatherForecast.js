
    import React, { useState, useEffect } from "react";
    import WeatherForecastDay from "./WeatherForecastDay";
    import axios from "axios";
    import "./WeatherForecast.css";
    
    export default function WeatherForecast(props) {
      const [loaded, setLoaded] = useState(false);
      const [forecast, setForecast] = useState(null);
    
      useEffect(() => {
        setLoaded(false);
      }, [props.coordinates]);
    
      function handleForecastResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
      }
    
      if (loaded) {
        return (
          <div className="WeatherForecast row">
            {forecast.map(function (day, index) {
              if (index < 5) {
                return (
                  <div className="col" key={index}>
                    <WeatherForecastDay data={day} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        );
      } else {
        let apiKey = "8ae332b284d255af8688a4dfad71bb1a";
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;
    
        axios.get(url).then(handleForecastResponse);
    
        return null;
      }
    }
