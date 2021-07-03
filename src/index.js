import { ApolloServer, gql } from "apollo-server";
import mongoose from "mongoose";

import { MONGODB_URI } from "./config.js";
import Post from "./models/Post.js";
import User from "./models/user.js";

const typeDefs = gql`
  type Query {
    getPosts: [Post]
  }
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
  }
`;

const resolvers = {
  Query: {
    getPosts: async () => {
      const posts = await Post.find();
      return posts;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const PORT = process.env.PORT ?? 5000;

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB database connected 💾");
    return server.listen({ port: PORT });
  })
  .then((res) => {
    console.log(`Server running at ${res.url} 🚀`);
  });
