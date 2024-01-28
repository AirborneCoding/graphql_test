const { gql } = require("apollo-server")

const bookSchema = gql`

    type Query {
        hello: String
        getAllBooks: [Book]
    }

    type Mutation { 
        createBook
        (
            name:String!,
            author:String!
            genre:String!
            pages:Int!
            # bookInfo:BookInput!
        ):String
    }

    input BookInput {
        name:String!
        author:String!
        genre:String!
        pages:Int!
    }

    type Book {
        _id:ID!
        name:String!
        author:String!
        genre:String!
        pages:Int!
    }

`

module.exports = bookSchema