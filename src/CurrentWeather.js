import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";

import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <h1>{props.weather.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.weather.date} />
        </li>
        <li className="text-capitalize">{props.weather.description}</li>
      </ul>
      <div className="row weather-display">
        <div className="col-6">
          <img src={props.weather.icon} alt={props.weather.description} />
          <Temperature temperature={props.weather.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.weather.humidity}%</li>
            <li>Wind: {props.weather.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
