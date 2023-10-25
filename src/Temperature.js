import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("metric");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function showFarhenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  if (unit === "metric") {
    return (
      <span>
        <span className="temperature">{Math.round(props.temperature)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFarhenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheitTemp = (props.temperature * 9) / 5 + 32;
    return (
      <span>
        <span className="temperature">{Math.round(fahrenheitTemp)}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
