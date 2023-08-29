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
const { getService, getCustomer, getBookedCustomer, getServiceProvider } = require("../handler/getAdminData");
const { isLogin } = require("../middleware/authenticate");
const { getValidUser } = require("../handler/getValidUser");
const { addServices, addParameters } = require("../handler/Admin");
const { register } = require("../handler/register");
 const route=express.Router();
 route.post("/api/signup",register)
 route.post("/api/login",auth)
 route.get("/api/getService",getService)
 route.get("/api/getCustomer",getCustomer)
 route.get("/api/getServiceProvider",getServiceProvider)
 route.get("/api/getBookedCustomer",getBookedCustomer)
 route.get("/api/validUser",isLogin,getValidUser)
 route.post("/api/addServices", upload.single('Image'),addServices)
 route.post("/api/addParameters",addParameters)
 module.exports=route