import React from "react";
import "./Right.css";

export default function Right() {
  return (
    <div className="right-part" id="forecast">
      <div className="right-details">
        <span className="first">
          <span className="day-time">
            <strong>16:00</strong>
            <img
              className="icon-size"
              src=" https://openweathermap.org/img/wn/03d@2x.png"
            />
            <span className="forecast-temperature">11°</span>
          </span>
        </span>
      </div>
    </div>
  );
}
