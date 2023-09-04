const { registeredService } = require("../models/RegisteredService")

const registerService=async(req,res)=>{
console.log(req.body)
if(!req.body.Service || !req.body.ServiceProviderName || !req.body.ServiceProvidedBy || !req.body.Location || !req.body.GoldenParameters)
{
   res.status(400).json({msg:"All fields are required"})
}
try{
    const data=await registeredService.create({
        Service:req.body.Service,
        ServiceProviderName:req.body.ServiceProviderName,
        ServiceAddedBy:req.body.ServiceProvidedBy,
        Location:req.body.Location,
        GoldenParameters:req.body.GoldenParameters,
        AddOnsParameter:req.body.AddOnsParameters
    })
    res.status(201).json(data);
}
catch(err){
    console.log(err)
    res.status(400).json({msg:"Something went wrong"})
}
}
module.exports={registerService}