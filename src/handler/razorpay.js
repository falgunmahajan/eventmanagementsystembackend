const Razorpay = require("razorpay");
const shortid = require("shortid");
const crypto=require("crypto");
const { BookedCustomer } = require("../models/booking");
const { error } = require("console");
var razorpay = new Razorpay({
    key_id: process.env.keyId,
    key_secret: process.env.keySecret,
  });
const razorpayFunction=async (req, res) => {
    // console.log(req.body)
    const amount = req.body['Total Price'];
    
    const options = {
      amount: (amount * 100),
      currency: "INR",
      receipt: shortid.generate(),
      payment_capture: 1,
    };
   const resp= await razorpay.orders.create(options);
   console.log(resp);
   return res.json({
      id:resp.id,
      currency:resp.currency,
      amount:resp.amount,
      key:process.env.keyId
   })
}
const paymentVerification=async(req,res)=>{
    console.log("order",req.body.orderDetails)
    const data=req.body.data
    console.log("data",data)
    const generated_signature =crypto.createHmac('sha256',"f6iyzQUXDFunOn3Ga7GEugDW")
    .update((req.body.orderDetails.razorpay_order_id + "|" +req.body.orderDetails.razorpay_payment_id).toString())
    .digest('hex');
  
  
    if (generated_signature == req.body.orderDetails.razorpay_signature) {
     console.log("true")
     try{
        const bookedService=await BookedCustomer.create({
            ServiceName:data.Service,
            ServiceProviderId:data.ServiceAddedBy,
            ServiceProviderName:data.ServiceProviderName,
            CustomerName:data.CustomerName,
            CustomerId:data.CustomerId,
            Address:data.Location.Name,
            PhoneNumber:data.CustomerContact,
            BookingStartDate:data['Start Date'],
            BookingEndDate:data['End Date'],
            
            GoldenParameters:data.GoldenParameters,
            AddonsParameters:data.AddOnsParameter,
            Quantity:data.Quantity,
           
            TotalPrice:data['Total Price'],
            OrderId:req.body.orderDetails.razorpay_order_id,
            paymentId:req.body.orderDetails.razorpay_payment_id
        })
        console.log(bookedService)

        res.status(201).json({message:`Your ${bookedService.ServiceName} Service is booked from ${`0${bookedService.BookingStartDate.getDate()}`.slice(-2)}-${`0${bookedService.BookingStartDate.getMonth()+1}`.slice(-2)}-${bookedService.BookingStartDate.getFullYear()} to ${`0${bookedService.BookingEndDate.getDate()}`.slice(-2)}-${`0${bookedService.BookingEndDate.getMonth()+1}`.slice(-2)}-${bookedService.BookingEndDate.getFullYear()}
            Your orderId is ${bookedService.OrderId}
            Your paymentId is ${bookedService.paymentId}`});
        
    }
    catch(err){
      console.log(err)
        res.status(400).json({message:"Something went wrong"})
    }
    }
  }
module.exports={razorpayFunction,paymentVerification}