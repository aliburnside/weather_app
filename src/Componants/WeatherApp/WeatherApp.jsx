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
      </div>
    </div>
  );
};
export default WeatherApp;
