import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import rootRoute from "./routes/root.js";

/* Configurations */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3500;
// __dirname is a global variable -> look inside the folder we are in
// look inside the /public folder for static files (css, img, etc.)
app.use("/", express.static(path.join(__dirname, "/public")));



/* ROUTES */
app.use("/", rootRoute);

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



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));