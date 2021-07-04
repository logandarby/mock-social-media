import Post from "../../models/Post.js";

const postResolvers = {
  Query: {
    getPosts: async () => {
      const posts = await Post.find();
      return posts;
    },
    getPost: async (_, { postId }) => {
      const post = Post.findById(postId);
      if (post) {
        return post;
      } else {
        throw new Error("Post not found");
      }
    },
  },
};

export default postResolvers;
