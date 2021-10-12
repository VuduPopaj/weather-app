import React from "react";
import LocationWeather from "./LocationWeather";

function LocationList({ list, setList }) {
  return (
    <div className="container">
      <ul className="list">
        {list.map((item) => (
          <LocationWeather
            list={list}
            setList={setList}
            key={item.id}
            todo={item}
            weather={item.weather}
          />
        ))}
      </ul>
    </div>
  );
}

export default LocationList;
