import { Grid } from "@material-ui/core";
import React from "react";
import LocationWeather from "./LocationWeather";

function WeatherDisplay({ list, setList, arrow, setArrow }) {
  return (
    <Grid container>
      {list.map((item) => (
        <LocationWeather
          list={list}
          setList={setList}
          key={item.id}
          todo={item}
          weather={item.weather}
          arrow={arrow}
          setArrow={setArrow}
        />
      ))}
    </Grid>
  );
}

export default WeatherDisplay;
