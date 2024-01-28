const Books = require("../../models/book.model")

/**-----------------------------------------------
 * @desc    register new user
 * @method  MUTATION
 * @access  public 
------------------------------------------------*/

const createBook = async (parent, args, context, info) => {

    const newBook = await Books.create({
        name: args.name,
        author: args.author,
        genre: args.genre,
        pages: args.pages
    })

    return "book created"

}

const getAllBooks = async (parent, args, context, info) => {
    const books = await Books.find().sort("-1")
    return books
}

const hello = (parent, args, context, info) => {
    return "hello graphql"
}

module.exports = {
    Query: {
        hello,
        getAllBooks
    },
    Mutation: {
        createBook,
    }
}