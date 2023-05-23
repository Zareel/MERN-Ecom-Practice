# MERN Ecommerce App

### Click to cart is a MERN Stack ecommerce app. It allows user to browse, search for and purchase products online

# Features

- Brows products by category
- Search for products by name or decription
- View product details including image and specification
- Add products to a cart and proceed to checkout
- Check out securely using a payment gateway
- View order history and status
- Admin panel to manage products, categories and orders

# Technologies

- Mogodb for database
- Express js for server
- Reactjs for frontend
- Nodejs for backend
- Razerpay for payment processing
- JWT for authentication

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

- create new folders

1. models
2. routes
3. controllers
4. utils
5. middleware

## Model hashing password

- create userSchema in userModel.js file
- create authRoutes.js file inside routes folder
- create a function registerController inside authController.js file and export
- import registerController in autRouter.js file and create route

```js
// REGISTER || Method: post
router.post("/register", registerController);
```

- import authRoutes in server.js and create routes

```js
import authRoutes from "./routes/authRoutes.js";
//routes
app.use("/api/v1/auth", authRoutes);
```

### hash and compare password

- create authUtils file in utils folder

```js
import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
  } catch (error) {
    console.log(error);
  }
};
```

- create two functions one for hashing password and second for comparing password

```js
export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
```

## registering user

- need to completes notes here

## SEO (Search Engine Optimization)

### This reusable React component will manage all of your changes to the document head.

```js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />

        <title>{title}</title>
      </Helmet>
      <Header />
      <main className="min-h-[70vh]">{children}</main>
      <Footer />
    </div>
  );
};

Layout.defalutProps = {
  title: "ClickToCart - ShopOnline",
  description: "Mern Stack Project",
  keywords: "mern, react, node, mongodb",
  author: "Zareel",
};
export default Layout;
```
