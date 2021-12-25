import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [weatherForecast, setForecast] = useState(null);

    useState(() => {
        setLoaded(false);
    }, [props.data.coord]);
    
    function handleResponse(response) {
setForecast(response.data.daily)
setLoaded(true);
    }

  function load() {
    let lat = props.data.coord.lat
    let lon = props.data.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=8ae332b284d255af8688a4dfad71bb1a&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="row">
          {weatherForecast.map(function (dailyForecast, index){
              if (index < 6) {
                  return(
              <div className="col-6 col-sm-2" key={index}>
          <weatherForecastDay data={dailyForecast}/>
        </div>
          );
        } else {
            return null;
        }
          })}
        
      </div>
    );
} else {
    load();
    return null;
}
}