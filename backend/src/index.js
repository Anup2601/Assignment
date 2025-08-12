import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import http from "http";
import carRoutes from "./routes/carRouts.js";
// Load env variables
dotenv.config({ path: "../.env" });
// Express app
const app = express();
const server = http.createServer(app);
// Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use('/api/cars', carRoutes);
// Additional CORS headers
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});



// Path handling for production build
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}
// Server start
const PORT = process.env.PORT || 5000;
server.listen(PORT, async () => {
    console.log(` Listening on port ${PORT}`);
    await connectDB();
});
