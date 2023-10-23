import React from "react";
import Search from "./Search";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Search />
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
