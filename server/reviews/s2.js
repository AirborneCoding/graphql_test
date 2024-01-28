require("dotenv").config()

const express = require("express");
const { expressMiddleware } = require("@apollo/server/express4")
const { createApolloServer, httpServer, app } = require("./config/apollo/apolloConfig");

const connectDB = require("./config/db/connectDB")

const cors = require("cors")

// start App
async function startApp() {


    const apolloServer = createApolloServer();
    await apolloServer.start();



    // graphql
    app.use(
        "/graphql",
        cors({ origin: ['http://localhost:5173'], credentials: true }),
        express.json(),
        expressMiddleware(apolloServer, {
            context: async ({ req, res }) => ({ req }),
        })
    )

    const connectDatabase = async () => {
        try {
            await connectDB(process.env.MONGO_URI)
            console.log("Connected to the database successfully");
        } catch (error) {
            console.error("Failed to connect to the database:", error);
            process.exit(1);
        }
    };

    // db then start
    const PORT = process.env.PORT || 5000
    const start = async () => {
        try {
            await connectDatabase()
            // app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
            await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
            console.log(`🚀 Server ready at http://localhost:5000/graphql`);

        } catch (error) {
            console.log("something went wrong", error);
        }
    }

    start()

}

startApp()



