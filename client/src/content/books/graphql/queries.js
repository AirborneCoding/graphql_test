import { gql } from "@apollo/client"

export const FETCH_BOOKS = gql`
query {
  getAllBooks {
    _id
    name
    author
    genre
    pages
  }
}
`