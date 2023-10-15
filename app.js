require("dotenv").config();
const express= require("express");
const cors=require("cors")
const mongoose=require("mongoose");
const cookieParser = require("cookie-parser");

const app=express();
const route=require("./src/routes/home.js");
mongoose.connect(process.env.dbUrl).then(()=>{
    console.log("Database Successfully connected")
})
app.listen(process.env.PORT,()=>{
    console.log(`The app is listening at port ${process.env.PORT}`);
})
app.use(express.static("uploads"))
app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())
app.use(cors())
app.use('',route);
