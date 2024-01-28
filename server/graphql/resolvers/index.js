const bookResolver = require("./book.resolver")

const resolvers = {
    Query: {
        ...bookResolver.Query,
    },
    Mutation: {
        ...bookResolver.Mutation
    },
};

module.exports = resolvers;

