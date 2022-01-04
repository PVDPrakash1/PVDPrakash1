const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;

const carData = require("./Mock_Data/cars.json");

const CarType = require("./TypeDefs/CarType");

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      getAllCars: {
        type: new GraphQLList(CarType),
        args: { id: { type: GraphQLInt } },
        resolve(parent, args) {
          return carData;
        },
      },
    },
  });
  
  const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
      createUser: {
        type: CarType,
        args: {
            id: { type: GraphQLInt },
            name: { type: GraphQLString },
            description: { type: GraphQLString },
            category: { type: GraphQLString },
            price: { type: GraphQLString },
        },
        resolve(parent, args) {
          userData.push({
            id: { type: GraphQLInt },
            name: { type: GraphQLString },
            description: { type: GraphQLString },
            category: { type: GraphQLString },
            price: { type: GraphQLString },
          });
          return args;
        },
      },
    },
  });
  
  module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });