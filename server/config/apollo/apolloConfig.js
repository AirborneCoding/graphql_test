// apolloConfig.js
const { ApolloServer } = require("@apollo/server");
const { StatusCodes } = require("http-status-codes");

const typeDefs = require("../../graphql/typeDefs");
const resolvers = require("../../graphQL/resolvers");

const formatError = (err) => {
    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || "Something went wrong try again later",
    };
    if (err.extensions.exception?._message?.includes("validation failed")) {
        customError.msg = Object.values(err.extensions.exception.errors)
            .map((item) => item.message)
            .join(",");
        customError.statusCode = 400;
    }
    if (
        err.extensions.exception?.code &&
        err.extensions.exception.code === 11000
    ) {
        customError.msg = `Duplicate value entered for  ${Object.keys(
            err.extensions.exception.keyValue
        )} field, please choose another value`;
        customError.statusCode = 400;
    }
    if (err.extensions.exception?._message?.includes("cast error")) {
        customError.msg = `No item found with id : ${err.value}`;
        customError.statusCode = 404;
    }
    return { msg: customError.msg };
};

const onHealthCheck = async () => {
    return { status: "ok" };
};

const createApolloServer = () => {
    return new ApolloServer({
        typeDefs,
        resolvers,
        formatError,
        onHealthCheck,
    });
};

module.exports = createApolloServer;

