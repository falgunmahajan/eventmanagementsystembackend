const { BookedCustomer } = require("../models/booking")

const registerBookedCustomer=async(req,res)=>{
    console.log(req.body)
    try{
        const bookedService=await BookedCustomer.create({
            ServiceName:req.body.Service,
            ServiceProviderId:req.body.ServiceAddedBy,
            ServiceProviderName:req.body.ServiceProviderName,
            CustomerName:req.body.CustomerName,
            CustomerId:req.body.CustomerId,
            BookingStartDate:req.body['Start Date'],
            BookingEndDate:req.body['End Date'],
            Address:req.body.Location.Name,
            GoldenParameters:req.body.GoldenParameters,
            AddonsParameters:req.body.AddOnsParameter,
            Quantity:req.body.Quantity,
            PhoneNumber:req.body.CustomerContact,
            TotalPrice:req.body['Total Price']
        })
        console.log(bookedService)
        res.status(201).json({message:`Your ${bookedService.ServiceName} Service is booked from ${`0${bookedService.BookingStartDate.getDate()}`.slice(-2)}-${`0${bookedService.BookingStartDate.getMonth()+1}`.slice(-2)}-${bookedService.BookingStartDate.getFullYear()} to ${`0${bookedService.BookingEndDate.getDate()}`.slice(-2)}-${`0${bookedService.BookingEndDate.getMonth()+1}`.slice(-2)}-${bookedService.BookingEndDate.getFullYear()}`});
    }
    catch(err){
        res.status(400).json({message:"Something went wrong"})
    }
    
}
module.exports={registerBookedCustomer}