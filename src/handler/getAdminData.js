const { service, parameter } = require("../models/admin");
const { BookedCustomer } = require("../models/booking");
const { Customer, serviceProvider } = require("../models/user");

const getService=async(req,res)=>{
    const services =await service.find({})
    res.status(200).json(services)
}


const getCustomer=async(req,res)=>{
    const customers =await Customer.find({})
    res.status(200).json(customers)
}
const getServiceProvider=async(req,res)=>{
    const serviceprovider =await serviceProvider.find({})
    res.status(200).json(serviceprovider)
}
const getBookedCustomer=async(req,res)=>{
    const bookedCustomer =await BookedCustomer.find({})
    res.status(200).json(bookedCustomer)
}
const getParameters=async(req,res)=>{
    const service=req.query.Service;
    const typeOfParameter=req.query.TypeOfParameter
    console.log(typeOfParameter)
    const parameters=await parameter.findOne({Service:service})
   if(typeOfParameter=="Golden Parameters")
   {
       res.status(200).json(parameters.GoldenParameter)
   }
   if(typeOfParameter=="AddOns Parameters")
   {
       res.status(200).json(parameters.AddOnsParameter)
   }
    

}
module.exports={getService,getCustomer,getServiceProvider,getBookedCustomer,getParameters}