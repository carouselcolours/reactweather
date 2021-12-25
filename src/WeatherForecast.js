import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./WeatherForecast.css";

export default function Forecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.data.coord]);
    
    function handleResponse(response) {
setForecast(response.data.daily)
setLoaded(true);
    }

  function search() {
    const apiKey = "8ae332b284d255af8688a4dfad71bb1a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="row">
          {forecast.map(function (dailyForecast, index){
              if (index < 6) {
                  return(
              <div className="col-6 col-sm-2" key={index}>
          <ForecastDay data={dailyForecast}/>
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