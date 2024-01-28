import { GraphQLClient } from 'graphql-request'
import { developmentUrlGraphql } from "../utils"

const graphQLClient = new GraphQLClient(developmentUrlGraphql)

export default graphQLClient
