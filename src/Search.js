import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";

export default function Search() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      setWeather(<CurrentWeather city={city} />);
    } else {
      setWeather(null);
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      {weather}
    </div>
  );
}
