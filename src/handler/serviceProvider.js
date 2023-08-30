const { options } = require("../models/admin");

const getServiceOptions=async(req,res)=>{
const service=req.query.service;
console.log(service)
try{
    const data=await options.findOne({Service:service})
    res.status(200).json(data)
}
catch(err){
    console.log(err)
    res.status(400).json({msg:"Something went wrong"})
}
}
module.exports={getServiceOptions}