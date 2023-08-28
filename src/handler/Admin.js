const { service } = require("../models/admin")

const addServices=async(req,res)=>{
    if(!req.body.Service || !req.file)
{
return res.status(400).json({msg:"All fields are required"})
}
try{
    const result=await service.create({
        Service:req.body.Service,
        ImageUrl:req.file.filename
      })
      res.status(201).json({Service:result})
}
catch(err){
    res.status(400).json({msg:"Something went wrong"})
}
}
module.exports={addServices}