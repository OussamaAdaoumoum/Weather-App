import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getWeatherQuery } from "../queries/queries";


export default function WeatherData() {
  const [weather, setWeather] = useState("marrakech");

  const [searchInput, setSearchInput] = useState("");

  const { loading, error, data } = useQuery(getWeatherQuery, {
    variables: { name: weather },
    //skip: !searchInput, // Skip the query if searchInput is empty
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setWeather(searchInput); // Update weather state with the search input
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { address, timezone, days } = data.weather;


  return (
    <>
      <div className="w-screen h-screen bg-gray-300 flex items-center justify-center">
        <div className="bg-gray-200 w-2/6 h-2/4 rounded-md">
          <form onSubmit={handleSearch}>
          <input
              type="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}/>
            <button type="submit">Search</button>
          </form>
          <p className="text-red-700">Addressxxq: {address}</p>
          <p>Timezone: {timezone}</p>
          {days.map((day) => (
            <p>day: {day.description}</p>

          ))}
          
          
        </div>
      </div>
    </>
  );
}
