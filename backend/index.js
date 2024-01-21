// const { error } = require("console");

// const express = require("express");
// const mongoose = require("mongoose");
// const multer = require("multer");
// const path = require("path");

import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import express from "express";
import dotenv from "dotenv";
import { Product } from "./models/Product.model.js";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
import cors from "cors";
import { User } from "./models/USer.model.js";

dotenv.config({
  path: "./.env",
});
// require("dotenv").config();

const app = express();

mongoose.connect(`${process.env.MONGODB}/e-comm`);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    origin: `${process.env.CORS_POINT}`,

    methods: ["GET", "POST"],
  })
);

app.get("/", (req, res) => {
  res.send("Express app running");
});


// defining a path for uploading the uploaded image in
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });


//app uses,fetches the images stored in upload when a user asks fro a image
app.use("/images", express.static("upload/images"));


//uploading a image
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${process.env.PORT}/images/${req.file.filename}`,
  });
});


//creating a product in db
app.post("/addproduct", async (req, res) => {
  const { id, name, image, old_price, new_price, category, date } = req.body;

  // let products = await Product.find({})
  // if(products.length>0){
  //   let last_product_array = products.slice(-1)
  //   let last_product = last_product_array[0]
  //  let id=last_product.id+1
  // }else{
  //   id=1
  // }

  const product = await Product.create({
    id,
    name,
    image,
    old_price,
    new_price,
    category,
    date,
  });

  console.log(product);
  await product.save();
  res.json({
    success: 1,
    name: req.body.name,
  });
});


//Creating api for deleting product
app.post("/removeproduct", async (req, res) => {
  const { id } = req.body;
  await Product.findOneAndDelete({
    id,
  });
  console.log("removed");
  res.json({
    success: true,
    name: req.body.name,
  });
});


//Creating api for getting all products
app.get("/allproducts", async (req, res) => {
  // const{} = req.body
  let products = await Product.find({});
  console.log("All Products Fetched");
  res.send(products);
});


// Creating end point for registeriung user using user schema
app.post("/signup", async (req, res) => {
  const { email, name, password, cartData } = req.body;
  let check = await User.findOne({ email: email });
  if (check) {
    return res.status(400).json({
      success: false,
      errors: "Existing user found with same email id",
    });
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = User.create({
    name,
    email,
    password,
    cartData: cart,
  });
  // await user.save();


  //for password part
  const data = {
    user: { id: user.id },
  };
  //hashing user password
  const token = jwt.sign(data, "secret_ecom");
  res.json({
    success: true,
    token,
  });
});


//creating endpoint for user login
app.post("/login", async (req, res) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email: email });
  if (user) {
    const passCompare = password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_ecom");
      res.json({
        success: true,
        token,
      });
    } else {
      res.json({ success: false, errors: "Wrong password" });
    }
  } else {
    res.json({ success: false, errors: "Wrong email id" });
  }
});


//Creating endpoint for new collection data
app.get("/newcollections", async (req, res) => {
  // const{} = req.body
  let products = await Product.find({});
  let newcollection = products.slice(1).slice(-8);
  console.log("newcollection fetched");
  res.send(newcollection);
});


//creating endpoint for popular in women section
app.get("/popularinwomen", async (req, res) => {
  let products = await Product.find({ category: "women" });
  let popular_in_women = products.slice(0, 4);
  console.log("Popular in women fetched");
  res.send(popular_in_women);
});


//Craeating middleware to fetch user
const fetchUser = async (req, res, next) => {
  const {} = req.header;
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ errors: "Please authenticate using a valid token" });
  } else {
    try {
      const data = jwt.verify(token, "secret_ecom");
      req.user = data.user;
      next();
    } catch (error) {
      res
        .status(401)
        .send({ errors: "Please authenticate using a valid token" });
    }
  }
};


//creating endpoint for cart data
app.post("/addtocart", fetchUser, async (req, res) => {
  // console.log(req.body,req.user);
  console.log("added", req.body.itemId);
  let userData = await User.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemId] += 1;
  await User.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("Added");
});


//Creating endpoint to remove prodcut from cartdata
app.post("/removefromcart", fetchUser, async (req, res) => {
  console.log("removed", req.body.itemId);
  // console.log(req.body,req.user);
  let userData = await User.findOne({ _id: req.user.id });
  if (userData.cartData[req.body.itemId] > 0)
    userData.cartData[req.body.itemId] -= 1;
  await User.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("Removed");
});


//Creating a endpoint to fetch logged in user cart items
app.post("/getcart", fetchUser, async (req, res) => {
  console.log("Getcart");
  let userData = await User.findOne({ _id: req.user.id });
  res.json(userData.cartData);
});

app.listen(process.env.PORT, (error) => {
  if (!error) {
    console.log(`Server runnuing on port ${process.env.PORT}`);
  } else {
    console.log("Error :" + error);
  }
});
