import axios from "axios";
import { loadAbort } from "@/utilities";

const weatherURL = import.meta.env.VITE_WEATHER_URL;
const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;

const get7DayForecastWeather = (latitud, longitude) => {
  const controller = loadAbort();
  return {
    call: () =>
      axios.get(
        `${weatherURL}?lat=${latitud}&lon=${longitude}&exclude=hourly,minutely&appid=${weatherApiKey}&units=metric`,
        { signal: controller.signal }
      ),
  };
};

export { get7DayForecastWeather };
