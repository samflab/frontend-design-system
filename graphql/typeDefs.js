export const typeDefs = `#graphql
type Author {
    id: ID!  #mandatory
    name: String
    books: [Book]
}

type Book {
    id: ID! #mandatory
    title: String!  #mandatory
    publishedYear: Int,
    author: Author
}

# Query to get all the data or any data
type Query {
    authors: [Author]
    books: [Book]
}

# Mutation to update any data

type Mutation {
    addBook(title: String!, publishedYear: Int, authorId: ID!): Book!
}
`