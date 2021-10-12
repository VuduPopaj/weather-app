import { Input } from "@material-ui/core";
import React from "react";

function WeatherCard({
  query,
  setQuery,
  setWeather,
  setDisabled,
  setShowSearch,
}) {
  const api = {
    key: process.env.REACT_APP_KEY,
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setShowSearch(false);
          setWeather(result);
          setQuery("");
          setDisabled(false);
          e.preventDefault();
        });
    }
  };

  return (
    <div className="search-box">
      <Input
        color="secondary"
        type="text"
        placeholder="Search City"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
      />
    </div>
  );
}

export default WeatherCard;
