require("dotenv").config()

const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');
const express = require('express');
const http = require('http');
const cors = require('cors');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphQL/resolvers');
const connectDB = require('./config/db/connectDB'); // Assuming this is the module for database connection

const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

async function startServer() {
    try {

        await connectDB(process.env.MONGO_URI);
        await server.start();

        app.use(
            '/graphql',
            cors(),
            express.json(),
            expressMiddleware(server),
        );

        const PORT = process.env.PORT || 5000;
        httpServer.listen({ port: PORT }, () => {
            console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
        });
    } catch (error) {
        console.log("Failed to connect to the database:", error);
    }
}

startServer();
