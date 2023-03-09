import React, { useEffect, useState } from "react";
import { useFetchAndLoad } from "@/hooks";
import { get7DayForecastWeather } from "@/services/weather.service";
import WeatherCard from "../WeatherCard/WeatherCard";
import { CircularProgress } from "@mui/material";

const CityWeather = ({ city }) => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [cityWeather, setCityWeather] = useState(null);

  const getCityWeather = async () => {
    try {
      const { data } = await callEndpoint(
        get7DayForecastWeather(city.lat, city.long)
      );
      setCityWeather(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCityWeather();
  }, []);

  return (
    <div className="CityWeather">
      <h1>{city.city_name}</h1>
      <div className="CityWeather__weather">
        {loading ? (
          <CircularProgress sx={{ color: "white", margin: "0 auto" }} />
        ) : (
          cityWeather &&
          cityWeather?.daily?.map((weather, index) => {
            if (index < 7)
              return (
                <WeatherCard
                  weather={weather}
                  key={`${city.slug}-${weather.dt}`}
                />
              );
          })
        )}
      </div>
    </div>
  );
};

export default CityWeather;
