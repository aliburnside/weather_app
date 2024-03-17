import React from "react";
import "./WeatherApp.css";

import search from "../Asset/search.png";
import clear from "../Asset/clear.png";
import cloud from "../Asset/cloud.png";
import drizzle from "../Asset/drizzle.png";
import humidity from "../Asset/humidity.png";
import rain from "../Asset/rain.png";
import snow from "../Asset/snow.png";
import wind from "../Asset/wind.png";

import apiKey from "../../../apiKey/apiKey";

const WeatherApp = () => {
  return (
    <div>
      <div className="container">
        <div className="top-bar">
          <input type="text" className="cityInput" placeholder="Search" />
          <div className="search-icon">
            <img src={search} alt="" />
          </div>
        </div>
        <div className="weather-image">
          <img src={cloud} alt="" />
        </div>
        <div className="weather-temp">24</div>
        <div className="weather-location">New York</div>
        <div className="data-container">
          <div className="element">
            <img src={humidity} alt="" className="icon" />
            <div className="data">
              <div className="humidity-percent">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind} alt="" className="icon" />
            <div className="data">
              <div className="humidity-percent">18km/h</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherApp;
