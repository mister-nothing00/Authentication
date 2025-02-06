import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./database/db.js";
import path from "path";

//Config file .env

dotenv.config();

//Config uring the express app
const app = express();

//Middleware

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://authentication-rz5h.onrender.com/",
  })
);

//Routes

import userRoutes from "./routes/userRoutes.js";

app.use("/user", userRoutes);

//PORT

const PORT = process.env.PORT;

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server in esecuzione `);
  connectDB();
});
