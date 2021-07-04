import postResolvers from "./posts.js";
import userResolvers from "./users.js";

const resolvers = {
  Query: {
    ...postResolvers?.Query,
    ...userResolvers?.Query,
  },
  Mutation: {
    ...postResolvers?.Mutation,
    ...userResolvers?.Mutation,
  },
};

export default resolvers;
