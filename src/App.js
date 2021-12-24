import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <div className="source-code">
        <footer>
          This project was coded by
          
            Danielle Parker
          
          and is{" "}
          <a
            href="https://github.com/carouselcolours/reactweather"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
        </div>
      </div>
    </div>
  );
}

export default App;