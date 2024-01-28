import { ApolloClient, InMemoryCache } from '@apollo/client';
import { developmentUrlGraphql } from "../utils"

const client = new ApolloClient({
    uri: developmentUrlGraphql,
    cache: new InMemoryCache(),
});


export default client