require("dotenv").config()

const express = require("express");
const { expressMiddleware } = require("@apollo/server/express4")
const createApolloServer = require("./config/apollo/apolloConfig");

const connectDB = require("./config/db/connectDB")

const cors = require("cors")

// start App
async function startApp() {
    const app = express()

    const apolloServer = createApolloServer();
    await apolloServer.start();

    // app.use(cors());
    app.use(express.json())

    // graphql
    app.use(
        "/graphql",
        cors(),
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
            app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
        } catch (error) {
            console.log("something went wrong", error);
        }
    }

    start()

}

startApp()



