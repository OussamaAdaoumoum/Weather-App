import { gql } from "@apollo/client";

const getWeatherQuery = gql`
  query weather($name: String!) {
    weather(name: $name) {
      address
      timezone
      days {
        datetime
        sunrise
        sunset
        description
        tempmax
        tempmin
        temp
      }
    }
  }
`;

export { getWeatherQuery };
