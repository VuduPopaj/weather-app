import React from "react";
import { Button, Paper, Typography } from "@material-ui/core";


function LocationWeather({ weather, list, setList, todo }) {
  const deleteHandler = () => {
    setList(list.filter((item) => item.id !== todo.id));
  };

  const dates = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div>
      {typeof weather.main != "undefined" ? (
        <Paper
          variant="outlined"
          style={{
            margin: "20px",
            height: "200px",
            width: "150px",
          }}
        >
          <Typography
            className="location-box"
            component={"span"}
            variant={"body1"}
            style={{ marginTop: "10px" }}
          >
            {weather.name},
            <img
              style={{ width: "20px", height: "20px", marginLeft: "10px" }}
              src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${weather.sys.country}.svg`}
              alt="United States"
            />
            <Typography component={"span"} variant={"body1"} className="date">
              {dates(new Date())}
            </Typography>
          </Typography>
          <Typography className="temp">
            {Math.round(weather.main.temp)}°C
            <img
              title={`${weather.weather[0].main}`}
              style={{ height: "40px", width: "40px", marginLeft: "10px" }}
              alt={weather.weather[0].icon}
              src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              className="weather"
            ></img>
          </Typography>
          <Typography component={"span"} variant={"body1"} className="weather">
            {weather.wind.speed} km/h
            <div
              className="weather"
              style={{
                display: "inline-table",
                marginLeft: "10px",
                width: "15px",
                height: "15px",
                borderTop: "2px solid ",
                borderRight: "2px solid",
                transform: `rotate(${weather.wind.deg}deg)`,
              }}
            />
          </Typography>
          <Button
            onClick={deleteHandler}
            color="secondary"
            size="medium"
            style={{ marginTop: "5px" }}
          >
            Remove
          </Button>
        </Paper>
      ) : (
        ""
      )}
    </div>
  );
}

export default LocationWeather;
