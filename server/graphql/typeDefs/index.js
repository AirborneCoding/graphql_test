const { gql } = require("apollo-server")

const bookSchema = require("./book.schema");

const typeDefs = gql`
  ${bookSchema},
`;

module.exports = typeDefs;