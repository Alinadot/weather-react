import React from "react";
import './App.css';

import Search from "./Search";
import Main from "./Main";
import Left from "./Left";
import Right from "./Right";


export default function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div className="weather-app">
          <Search />
          <Main />
          <Left />
          <Right />
          <Right />
          <Right />
          </div>
           <small><footer>Open Source-Code by <a href="https://github.com/Alinadot/weather-react" target="_blank" rel="noreferrer">Alina Shamko</a></footer>
      </small></div>
    </div>
  );
}
