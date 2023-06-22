const graphql = require("graphql");
const axios = require("axios");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLFloat
} = graphql;



function getData(name) {
  const uri = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+name+'?unitGroup=us&key=QT8YW9NBB9B6L5SMQHHFZ3TWN&contentType=json';
  
  return axios.get(uri)
    .then(function (response) {
      console.log(response.data.latitude);
      return response.data;
    })
    .catch(function (error) {
      throw new Error("Failed to fetch data from the API: " + error.message);
    });
}


const dayType = new GraphQLObjectType({
  name: 'Day',
  fields: () => ({
    datetime: { type: GraphQLString },
    sunrise: { type: GraphQLString },
    sunset: { type: GraphQLString },
    description: { type: GraphQLString },
    tempmax: { type: GraphQLFloat },
    tempmin: { type: GraphQLFloat },
    temp: { type: GraphQLFloat },
  }),
});


const weatherType = new GraphQLObjectType({
  name: "Weather",
  fields: () => ({ 
    address: { type: GraphQLString },
    description: { type: GraphQLString },
    timezone: { type: GraphQLString },
    days:{ type: new GraphQLList(dayType)  },
  }),
});



const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    weather: {
      type: weatherType,
      args: { name: { type: GraphQLString } },
      resolve(parent, args) {
        return getData(args.name);
      },
    }
  },
});



module.exports = new GraphQLSchema({
  query: RootQuery,
});
