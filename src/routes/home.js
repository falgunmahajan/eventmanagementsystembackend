const express=require("express");
const path=require("path")

const multer  = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname )
    }
  })
  
  const upload = multer({ storage: storage })
const { auth } = require("../handler/auth");
const { getService, getCustomer, getBookedCustomer, getServiceProvider, getParameters } = require("../handler/getAdminData");
const { isLogin } = require("../middleware/authenticate");
const { getValidUser } = require("../handler/getValidUser");
const { addServices, addParameters, addOptions } = require("../handler/Admin");
const { register } = require("../handler/register");
const { getServiceOptions } = require("../handler/serviceProvider");
const { getLocations } = require("../handler/getLocation");
const { registerService } = require("../handler/registerService");
const { getServiceData } = require("../handler/getServiceData");

const { availableDates } = require("../handler/availableDates");
const { bookedData } = require("../handler/bookedData");
const {  razorpayFunction, paymentVerification } = require("../handler/razorpay");
 const route=express.Router();
 route.post("/api/signup",register)
 route.post("/api/login",auth)
 route.get("/api/getService",getService)
 route.get("/api/getCustomer",getCustomer)
 route.get("/api/getServiceProvider",getServiceProvider)
 route.get("/api/getBookedCustomer",getBookedCustomer)
 route.get("/api/validUser/:token",isLogin,getValidUser)
 route.get("/api/getParameters",getParameters)
 route.get("/api/getServiceOptions",getServiceOptions)
 route.get("/api/getLocations",getLocations)
 route.get("/api/getServiceData",getServiceData)
 route.get("/api/availableDates",availableDates)
 route.get("/api/getBookedData/:id",bookedData)
//  route.get("/api/signout",(req,res)=>{res.clearCookie("id");
// res.send("You are logged out")})
 route.post("/api/addServices", upload.single('Image'),addServices)
 route.post("/api/addParameters",addParameters)
 route.post("/api/addOptions",addOptions)
 route.post("/api/registerServices",registerService)
//  route.post("/api/registerBookedCustomer",registerBookedCustomer)
 route.post("/razorpay",razorpayFunction)
 route.post("/paymentVerification",paymentVerification)

 module.exports=route