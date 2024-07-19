import { Users } from "./datasources/launch.js";
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        users: () => Users.findAll({ attributes: ['name', 'email', 'age'] }),
    },
};
export default resolvers;
