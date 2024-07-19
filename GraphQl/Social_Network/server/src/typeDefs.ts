const typeDefs = `#graphql
# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

# This "Book" type defines the queryable fields for every book in our data source.

type Post {
  text: String!,
  date: String,
}

type User {
  name: String!,
  email: String!,
  age: Int!,
  phone: String,
  country: String,
  posts: [Post]
}

type Query {
  users: [User],
  user: User,
  posts: [Post]  
}
`;

export default typeDefs;