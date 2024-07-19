import { Books } from "./datasources/launch.js";

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => Books.findAll({attributes: ['title', 'author']}),
  },
};

export default resolvers;