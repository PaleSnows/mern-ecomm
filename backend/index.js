const { error } = require("console");
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

const app = express();

mongoose.connect(
  `${process.env.MONGODB}/e-comm`,
);


app.get("/", (req, res) => {
  res.send("Express app running");
});

const storage =  multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }

})

const upload = multer({storage:storage})

app.use('/images',express.static('upload/images'))


app.post('/upload',upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${process.env.PORT}/images/${req.file.filename}`
    })
})


app.listen(process.env.PORT, (error) => {
  if (!error) {
    console.log(`Server runnuing on port ${process.env.PORT}`);
  } else {
    console.log("Error :" + error);
  }
});
