const { BookedCustomer } = require("../models/booking")

const bookedData=async(req,res)=>{
    const id=req.params.id;
    console.log(id)
const data=await BookedCustomer.find({$or:[{ CustomerId:id} ,  {ServiceProviderId:id }]})
console.log(data)
res.status(200).json(data)
}
module.exports={bookedData}