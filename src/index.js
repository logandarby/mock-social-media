import { ApolloServer, gql } from "apollo-server";
import mongoose from "mongoose";

import { MONGODB_URI, PORT } from "./config.js";
import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers/index.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB database connected 💾");
    return server.listen({ port: PORT });
  })
  .then((res) => {
    console.log(`Server running at ${res.url} 🚀`);
  })
  .catch((err) => {
    console.error(err);
  });
