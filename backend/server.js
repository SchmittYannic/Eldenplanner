import dotenv from "dotenv";
import "express-async-errors";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { logger, logEvents } from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import corsOptions from "./config/corsOptions.js";
import connectDB from "./config/dbConn.js";
import mongoose from "mongoose";
import rootRoute from "./routes/root.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import buildRoutes from "./routes/buildRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

/* Configurations */
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.disable("x-powered-by");
const PORT = process.env.PORT || 3500;
console.log(process.env.NODE_ENV);
connectDB();
const db = mongoose.connection;
app.use(logger);
app.use(cors(corsOptions));
app.use(express.json()); // lets app receive and parse json data
app.use(cookieParser());
app.set("trust proxy", 1);
// __dirname is a global variable -> look inside the folder we are in
// look inside the public folder for static files (css, img, etc.)
// alternative: app.use(express.static("public"));
app.use("/", express.static(path.join(__dirname, "public")));



/* ROUTES */
app.use("/", rootRoute);
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/builds", buildRoutes);
app.use("/comments", commentRoutes);

// handle every route that isnt found
// has to come after all other routes
app.all("*", (req, res) => {
    res.status(404);
    if (req.accepts("html")) {
        res.sendFile(path.join(__dirname, "views", "404.html"));
    } else if (req.accepts("json")) {
        res.json({ message: "404 Not Found" });
    } else {
        res.type("text").send("404 Not Found");
    }
});

app.use(errorHandler);

// listening for the open event
db.once("open", () => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

    // stream watching if document from users collection is deleted
    const userDeleteStream = db.collection("users").watch([
        { $match: { operationType: "delete" } }
    ]);

    // whenever a user gets deleted trigger cascade delete for all associated builds
    userDeleteStream.on("change", async (change) => {
        try {
            const deletedUserId = change.documentKey._id;
            const buildsCollection = db.collection("builds");
            await buildsCollection.deleteMany({ user: deletedUserId });
        } catch (err) {
            logEvents(`"userDeleteStream": ${change.documentKey._id}\t${err}`, "streamErrLog.log");
        }
    })
});

// listen to error
db.on("error", err => {
    console.log(err);
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log');
});