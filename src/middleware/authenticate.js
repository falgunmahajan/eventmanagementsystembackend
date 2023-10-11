const { getUser } = require("../../jwt");
const { admin } = require("../models/admin");
const { serviceProvider, Customer } = require("../models/user");

const isLogin=async(req,res, next)=>{
    console.log(req.params.token)
const token = req.params.token;
console.log(token)
try{
    const verifyToken = getUser(token);
    let user;
    if(verifyToken.Role=="Admin")
    {
      user=await admin.findOne({_id:verifyToken._id})
    }
    if(verifyToken.Role=="Service Provider")
    {
      user=await serviceProvider.findOne({_id:verifyToken._id})
    }
    if(verifyToken.Role=="Customer")
    {
      user=await Customer.findOne({_id:verifyToken._id})
    }
    if(!user){throw new Error("user not found")}
    console.log(user)
    req.userId=user._id;
    req.role=user.Role
    next();
}
 catch(err){
  console.log("error",err)
    res.status(401).json({message:"Unauthorized user"})
 }  

}
module.exports={isLogin}