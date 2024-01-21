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
import bodyParser from "body-parser";
import cors from 'cors'

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

app.use(cors(
  {origin :`${process.env.CORS_POINT}`,
  
  methods:["GET","POST"],
},
))

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
app.post('/removeproduct',async(req,res)=>{
  const{id} = req.body
  await Product.findOneAndDelete({
    id
  })
  console.log('removed');
  res.json({
    success:true,
    name:req.body.name
  })
})

//Creating api for getting all products
app.get('/allproducts',async(req,res)=>{
  // const{} = req.body
  let products = await Product.find({})
  console.log("All Products Fetched");
  res.send(products)
})

app.listen(process.env.PORT, (error) => {
  if (!error) {
    console.log(`Server runnuing on port ${process.env.PORT}`);
  } else {
    console.log("Error :" + error);
  }
});
