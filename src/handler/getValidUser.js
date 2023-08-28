const { admin } = require("../models/admin")

const getValidUser=async(req,res)=>{
if(req.role=="Admin")
{
    const validUser=await admin.findOne({_id:req.userId})
    res.status(201).json({validUser})
}
}
module.exports={getValidUser}