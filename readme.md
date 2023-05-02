# MERN Ecommerce App

## db connection

- server.js

```js
import express from "express";
const app = express();
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

// configure dotenv
dotenv.config();

//database config
connectDB();

//middleware
app.use(express.json());
app.use(morgan("dev"));

//rest API
app.get("/", (req, res) => {
  res.send(`<h1>Server is up and running</h1>`);
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(`Server is running on PORT  ${PORT}`.bgBlue.white);
});
```

- config/db.js

```js
import mongoose from "mongoose";
import colors from "colors";

// connecting to mongodb database

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to MongoDB database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Error in MogoDB ${error}`);
  }
};
export default connectDB;
```
