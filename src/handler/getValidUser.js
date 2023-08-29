const { admin } = require("../models/admin")
const { serviceProvider, Customer } = require("../models/user")

const getValidUser=async(req,res)=>{
    console.log(req.role)
if(req.role=="Admin")
{
    const validUser=await admin.findOne({_id:req.userId})
    res.status(201).json({validUser})
}
if(req.role=="Service Provider")
{
    const validUser=await serviceProvider.findOne({_id:req.userId})
    res.status(201).json({validUser})
}
if(req.role=="Customer")
{
    const validUser=await Customer.findOne({_id:req.userId})
    res.status(201).json({validUser})
}
}
module.exports={getValidUser}