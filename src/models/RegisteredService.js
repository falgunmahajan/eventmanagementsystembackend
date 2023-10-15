const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    Service:{
        type:String,
        required:true
    },
    ServiceProviderName:{
        type:String,
        required:true
    },
    ServiceAddedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "service providers",
        required:true
    },
    Location:{
            type:Object,
            required:true
      
    },
    GoldenParameters:{
        type:Object,
        required:true
    },
    AddOnsParameter:{
        type:Object,
        required:true
    }
},{timestamps:true})
const registeredService=new mongoose.model("Registered Service",schema);
module.exports={registeredService}