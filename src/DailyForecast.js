import React from "react";

import "./DailyForecast.css";

export default function DailyForecast(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function icon() {
    let icon = props.data.weather[0].icon;
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°C`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°C`;
  }

  return (
    <div className="DailyForecast">
      <div className="DailyForecast-day">{day()}</div>
      <img src={icon()} alt={props.data.weather[0].description} />
      <div className="DailyForecast-temperatures">
        <div className="DailyForecast-temperature-max">{maxTemperature()}</div>
        <div className="DailyForecast-temperature-min">{minTemperature()}</div>
      </div>
    </div>
  );
}
