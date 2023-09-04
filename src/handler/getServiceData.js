const { registeredService } = require("../models/RegisteredService")

const getServiceData=async(req,res)=>{
    const query=req.query
    let data;
    if(Object.keys(query)=="id")
    {
        data=await registeredService.find({ServiceAddedBy:query.id})
    }
    if(Object.keys(query)=="service")
    {
         data=await registeredService.find({Service:query.service})
    }
res.status(200).json(data)
}
module.exports={getServiceData}