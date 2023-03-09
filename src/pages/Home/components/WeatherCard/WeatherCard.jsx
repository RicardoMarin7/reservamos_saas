import React from "react";
import { DateTime } from "luxon";
import Cloudy from "@/assets/icons/Cloudy-thunder.svg";
import Rain from "@/assets/icons/rain.png";

const WeatherCard = ({ weather }) => {
  const date = DateTime.fromSeconds(weather.dt).toLocaleString(
    DateTime.DATE_FULL
  );

  const { min, max } = weather.temp;

  const getWeatherImage = () => {
    switch (weather?.weather[0]?.main) {
      case "Rain": {
        return Rain;
      }
      default: {
        return Cloudy;
      }
    }
  };

  return (
    <div className="WeatherCard">
      <h3>{date}</h3>
      <img src={getWeatherImage()} />
      <p>Min. Temp. {min}º</p>
      <p>Max. Temp. {max}º</p>
    </div>
  );
};

export default WeatherCard;
