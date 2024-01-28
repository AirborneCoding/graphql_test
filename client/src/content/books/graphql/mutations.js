import { gql } from "@apollo/client"

export const ADD_BOOKS = gql`
mutation Mutation($name: String!, $author: String!, $genre: String!, $pages: Int!) {
    createBook(name: $name, author: $author, genre: $genre, pages: $pages)
}
`

