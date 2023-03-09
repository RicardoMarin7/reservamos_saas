import {
  AppBar,
  Toolbar,
  Typography,
  Autocomplete,
  TextField,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedCities } from "@/redux/slices/cities.js";
import { useFetchAndLoad } from "@/hooks";
import {
  getAllAvailableCities,
  getCitiesByQuery,
} from "@/services/cities.service";

const Navbar = () => {
  const [cities, setCities] = useState([]);
  const [query, setQuery] = useState("");
  const { loading, callEndpoint } = useFetchAndLoad();
  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    dispatch(setSelectedCities(value));
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const getUniqueCities = (cities) => {
    const unique = [
      ...new Map(cities.map((item) => [item["city_name"], item])).values(),
    ];
    return unique;
  };

  const getCities = async (query) => {
    try {
      const { data } = await callEndpoint(getCitiesByQuery(query));
      setCities(getUniqueCities(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCities(query);
  }, [query]);

  return (
    <AppBar position="fixed" className="Navbar">
      <Toolbar className="Navbar__toolbar">
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Reservamos Saas
        </Typography>
        <Autocomplete
          multiple
          options={cities || []}
          sx={{ padding: "0 3em" }}
          getOptionLabel={(option) => option.city_name}
          filterSelectedOptions
          loading={loading}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{ color: "white" }}
              label="Busca las ciudades para ver el clima"
              placeholder="Buscar..."
              onChange={handleQueryChange}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
