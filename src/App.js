import React from "react";
import WeatherSearch from "./WeatherSearch";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="app-display">
          <WeatherSearch defaultCity="Toronto" />
        </div>
        <footer>
          <a
            href="https://github.com/annannanna123/weather-react"
            target="blank_"
          >
            Open-source code
          </a>{" "}
          by Anna Chu
        </footer>
      </div>
    </div>
  );
}

export default App;
