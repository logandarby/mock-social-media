import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    sayHi: String!
  }
`;

const resolvers = {
  Query: {
    sayHi: () => {
      return "Hi!";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const PORT = process.env.PORT ?? 5000;

server.listen({ port: PORT }).then((res) => {
  console.log(`Server running at ${res.url}`);
});
