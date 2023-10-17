import React from "react";
import Search from "./Search";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Search />
      </header>
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
  );
}

export default App;
