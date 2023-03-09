import axios from "axios";
import { loadAbort } from "@/utilities";

const citiesURL = `${import.meta.env.VITE_CITIES_URL}`;

const getAllAvailableCities = () => {
  const controller = loadAbort();
  return {
    call: () => axios.get(citiesURL, { signal: controller.signal }),
  };
};

const getCitiesByQuery = (query) => {
  const controller = loadAbort();

  return {
    call: () =>
      axios.get(`${citiesURL}?q=${query || ""}`, { signal: controller.signal }),
  };
};

export { getAllAvailableCities, getCitiesByQuery };
