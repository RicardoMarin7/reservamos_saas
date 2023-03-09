import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { CityWeather, Navbar } from "./components";

const Home = () => {
  const { selectedCities } = useSelector((state) => state.cities);

  return (
    <>
      <Navbar />
      {selectedCities?.length > 0 ? (
        selectedCities.map((city) => <CityWeather city={city} key={city.id} />)
      ) : (
        <div className="Home">
          <h2>Aún no has seleccionado ninguna ciudad</h2>
          <p>
            Para seleccionar una ciudad solo busca el nombre en la barra de
            busqueda y da click cuando aparezca en la lista
          </p>
        </div>
      )}
    </>
  );
};

export default Home;
