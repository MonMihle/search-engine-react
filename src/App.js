import "./App.css";
import Weather from "./Weather";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Application</h1>
        <br />
        <Weather codedCity="Cape Town" />

        <footer>
          This project was coded by Monica Mntanywa and is {""}
          <a href="https://github.com/MonMihle/weather-react-app">
            open source on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
