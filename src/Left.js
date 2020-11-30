import React from "react";
import "./Left.css";

export default function Left() {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="weather-temperature">
          <p className="description" id="description">
            <small>Sunny</small>
          </p>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Clear"
            id="icon"
            className="main-icon"
          />
          <ul className="details">
            <li>
              Humidity:81 <span id="humidity"></span>%
            </li>
            <li>
              Wind: 10 <span id="wind"></span> Km/H
            </li>
          </ul>
          <strong className="main-temperature" id="temperature">
            13
          </strong>
          <span className="units">
            <a href="#" id="celsius-link" className="active">
              °C
            </a>{" "}
            <span className="separate">|</span>
            <a href="#" id="fahrenheit-link">
              °F
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

