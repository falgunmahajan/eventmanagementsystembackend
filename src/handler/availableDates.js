const { BookedCustomer } = require("../models/booking");

const availableDates=async(req,res)=>{
    console.log(req.query)
    const start=req.query.start;
    const end=req.query.end;
    const service=req.query.service;
    const serviceProviderId=req.query.serviceProviderId
    const user=await BookedCustomer.findOne({ServiceName:service,ServiceProviderId:serviceProviderId,$or:[{BookingStartDate:{$gte:start,$lte:end}},{BookingEndDate:{$gte:start,$lte:end}},{BookingStartDate:{$lte:start},BookingEndDate:{$gte:end}}]})
    if(user)
    {
    const startDate=new Date(user.BookingStartDate)
    const endDate=new Date(user.BookingEndDate)
        res.status(400).json({message:`Service is not available from ${`0${startDate.getDate()}`.slice(-2)}-${`0${startDate.getMonth()+1}`.slice(-2)}-${startDate.getFullYear()} to ${`0${endDate.getDate()}`.slice(-2)}-${`0${endDate.getMonth()+1}`.slice(-2)}-${endDate.getFullYear()} .Please select another dates.`}) 
    }
    else{
        res.status(200).json({message:"Service is available"})
    }
}
module.exports={availableDates}