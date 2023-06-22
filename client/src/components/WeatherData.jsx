import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getWeatherQuery } from "../queries/queries";

import WeatherCard from "./WeatherCard";

export default function WeatherData() {
  const [weatherCity, setWeatherCity] = useState("marrakech");

  const [searchInput, setSearchInput] = useState("");

  const { loading, error, data } = useQuery(getWeatherQuery, {
    variables: { name: weatherCity },
    //skip: !searchInput, // Skip the query if searchInput is empty
  });

  const handleSearch = (weatherCity) => {
    setWeatherCity(weatherCity); 
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { address, timezone, days } = data.weather;

console.log(data.weather);
  return (
    <>
      <WeatherCard weatherData={data.weather} weatherCity={weatherCity} handleSearch={handleSearch}/>
    </>
  );
}
