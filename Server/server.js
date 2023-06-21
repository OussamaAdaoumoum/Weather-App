const axios = require("axios");
var express = require("express");
var app = express();
const schema = require("./schema/schema");
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');


//allow cross-origin requests 
app.use(cors());

// const options = {
//   method: "GET",
//   url: "https://ai-weather-by-meteosource.p.rapidapi.com/find_places",
//   params: {
//     text: "fishermans wharf",
//     language: "en",
//   },
//   headers: {
//     "X-RapidAPI-Key": "a8b21cfc27msh77b4694d014bcebp150c74jsnc33fc003bcf1",
//     "X-RapidAPI-Host": "ai-weather-by-meteosource.p.rapidapi.com",
//   },
// };


// const uri ="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/marrakech?unitGroup=us&key=QT8YW9NBB9B6L5SMQHHFZ3TWN&contentType=json";
// let apiData;

// axios.get(uri).then(function (response) {
//   console.log("axioooooos" + response.data.latitude);
//   apiData = response.data;
// });

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});



// app.get("/graphql", function (req, res) {
//   res.send("Hello World!");
//   try {
//     console.log("waaaaaaxdzx");
//     const response = async () => await axios.request(uri);
//     console.log("waaaaaaa" + response.data);
//   } catch (error) {
//     console.error(error);
//   }
// });

// app.listen(4000);
