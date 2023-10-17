import React, { useState } from "react";
import axios from "axios";

export default function CurrentWeather(props) {
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setWeather({
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
    });
  }

  let apiKey = "15b6ba0523386a8a73b38b2440a74dea";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);

  return (
    <div className="CurrentWeather">
      <h2>{props.city}</h2>
      <li>Temperature: {Math.round(weather.temperature)}°C</li>
      <li>Description: {weather.description}</li>
      <li>Humidity: {weather.humidity}%</li>
      <li>Wind: {weather.wind}km/h</li>
      <li>
        <img src={weather.icon} alt={weather.description} />
      </li>
    </div>
  );
}
