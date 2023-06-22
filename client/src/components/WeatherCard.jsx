import React, { useState } from "react";


function WeatherCard(props, { weatherCity, handleSearch }) {

    const [searchInput, setSearchInput] = useState("");

    const handleSearchCard = (e) => {
        e.preventDefault();
        // setWeather(searchInput); // Update weather state with the search input
        console.log("rah tklikaat")

        props.handleSearch(searchInput)
        console.log("rah tklikaat")
      };
    console.log("this is my data,",props.weatherData);
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen min-h-screen text-gray-700 p-10 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200">
        <div className="w-full max-w-screen-sm bg-white p-10 rounded-xl ring-8 ring-white ring-opacity-40">
            <form  onSubmit={handleSearchCard} className="flex justify-center items-center">
            <input
                type="text"
                placeholder="Enter a location"
                className="w-4/6 py-2 px-4 mb-4 border-2 border-gray-300 rounded-md"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </form>
       
          <div className="flex justify-between">
            <div className="flex flex-col">
                
              <span className="text-6xl font-bold">{Math.floor((props.weatherData.days[0].temp - 32) * 5/9)}°C</span>
              <span className="font-semibold mt-1 text-gray-500">
              
                {props.weatherData.address}
              </span>
            </div>
            <svg
              className="h-24 w-24 fill-current text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z" />
            </svg>
          </div>
          <div className="flex justify-between mt-12">
            <div className="flex flex-col items-center">
              <span className="font-semibold text-lg">29°C</span>
              <svg
                className="h-10 w-10 fill-current text-gray-400 mt-3"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.1-1.79-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z" />
              </svg>
              <span className="font-semibold mt-1 text-gray-500">Now</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-semibold text-lg">32°C</span>
              <svg
                className="h-10 w-10 fill-current text-gray-400 mt-3"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.41-1.79 1.8-1.408-1.41zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z" />
              </svg>
              <span className="font-semibold mt-1 text-gray-500">12:00 PM</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-semibold text-lg">26°C</span>
              <svg
                className="h-10 w-10 fill-current text-gray-400 mt-3"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.41-1.79 1.8-1.408-1.41zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z" />
              </svg>
              <span className="font-semibold mt-1 text-gray-500">3:00 PM</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-semibold text-lg">28°C</span>
              <svg
                className="h-10 w-10 fill-current text-gray-400 mt-3"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.41-1.79 1.8-1.408-1.41zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z" />
              </svg>
              <span className="font-semibold mt-1 text-gray-500">6:00 PM</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-semibold text-lg">24°C</span>
              <svg
                className="h-10 w-10 fill-current text-gray-400 mt-3"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.41-1.79 1.8-1.408-1.41zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z" />
              </svg>
              <span className="font-semibold mt-1 text-gray-500">9:00 PM</span>
            </div>
          </div>
        </div>
        {props.weatherData.days.slice(1, 4).map((day,idx)=>(
        <div key={idx} className="flex flex-col space-y-6 w-full max-w-screen-sm bg-white p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40">
            <div className="flex justify-between items-center">
                <span className="font-semibold text-lg w-1/4">{day.datetime}</span>
                <div className="flex items-center justify-end w-1/4 pr-10">
                <span className="font-semibold">12%</span>
                <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 16 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g transform="matrix(1,0,0,1,-4,-2)">
                    <path d="M17.66,8L12.71,3.06C12.32,2.67 11.69,2.67 11.3,3.06L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8ZM6,14C6.01,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 17.99,12 18,14C18.016,17.296 14.96,19.809 12,19.74C9.069,19.672 5.982,17.655 6,14Z" style={{ fillRule: "nonzero" }} />
                    </g>
                </svg>
                </div>
                <svg className="h-8 w-8 fill-current w-1/4" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z" />
                </svg>
                <span className="font-semibold text-lg w-1/4 text-right">{Math.floor((day.tempmin - 32) * 5/9)}°C / {Math.floor((day.tempmax - 32) * 5/9)}°C</span>
            </div>
</div>

        ))}
        

      </div>

      

    </>
  );
}

export default WeatherCard;
