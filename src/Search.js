import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form id="search-form" className="mt-4">
      <div className="row">
        <div className="col-6">
          <input
            type="search"
            placeholder="Type a city..."
            className="form-control"
            id="the-city"
            autoComplete="off"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="search"
            className="btn btn-warning w-100"
          />
        </div>
        <div className="col-3">
          <button
            className="btn btn-outline-warning w-100"
            id="current-location-button"
          >
            📌
          </button>
        </div>
      </div>
    </form>
  );
}
