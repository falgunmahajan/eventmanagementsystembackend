const { service } = require("../models/admin");
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
module.exports={getService,getCustomer,getServiceProvider,getBookedCustomer}