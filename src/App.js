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
      </div>
    </div>
  );
}
