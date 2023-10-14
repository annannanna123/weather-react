import React from "react";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";

export default function Weather(props) {
  function displayWeather(response) {
    alert(
      `The temperature in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }

  let apiKey = "15b6ba0523386a8a73b38b2440a74dea";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);

  return (
    <ColorRing
      visible={true}
      height="60"
      width="60"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={["#ef767a", "#456990", "#49beaa", "#49dcb1", "#eeb868"]}
    />
  );
}
