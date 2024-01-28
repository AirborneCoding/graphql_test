import GraphQLClient from "../../../config/graphqlRequest"
import { ADD_BOOKS } from "../graphql/mutations";
import { FETCH_BOOKS } from "../graphql/queries";

export const fetchBooks = async () => {
    try {
        const res = await GraphQLClient.request(FETCH_BOOKS)
        return res?.getAllBooks
    } catch (error) {
        console.log("api", error);
    }
}

export const addBook = async (data) => {
    // console.log("da", data);
    const variables = {
        name: data.name,
        author: data.author,
        genre: data.genre,
        pages: parseInt(data.pages)
    }
    try {
        const res = await GraphQLClient.request(
            ADD_BOOKS,
            variables
        )
        return res
    } catch (error) {
        console.log("api", error);
    }
}