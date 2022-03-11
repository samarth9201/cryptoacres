import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import "dotenv/config";

import UserRoutes from "./routes/UserRoutes.js";
import PropertyRoutes from "./routes/PropertyRoutes.js";

const app = express();
const PORT = process.env.PORT;

//enabling cross-origin requests and parsing incoming json
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//Routes
app.use("/users", UserRoutes);
app.use("/properties", PropertyRoutes);

//MongoDB connection
const mongodbConnectionURL = process.env.MONGODB_CONNECTION_URL;

mongoose
  .connect(mongodbConnectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    //connection successful
    app.listen(PORT, () => {
      console.log(`Server is running on Port ${PORT}`);
      console.log(`Connected to mongodb`);
    });
  })
  .catch((error) => {
    //connection unsuccesssful
    console.error(error.message);
  });

//Home Route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
