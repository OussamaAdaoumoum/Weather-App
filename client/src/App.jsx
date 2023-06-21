import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import WeatherData from "./components/WeatherData";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function App() {

  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ApolloProvider client={client}>
        <WeatherData />
      </ApolloProvider>
    </>
  );
}

export default App;
