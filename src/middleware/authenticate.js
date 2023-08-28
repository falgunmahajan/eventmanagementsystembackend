const { getUser } = require("../../jwt");
const { admin } = require("../models/admin");

const isLogin=async(req,res, next)=>{
    console.log(req.cookies)
const token = req.cookies.id;
console.log(token)
try{
    const verifyToken = getUser(token);
    let user;
    if(verifyToken.Role=="Admin")
    {
      user=await admin.findOne({_id:verifyToken._id})
    }
    if(!user){throw new Error("user not found")}
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