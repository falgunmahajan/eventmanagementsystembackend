const mongoose= require("mongoose");
const adminSchema=new mongoose.Schema({
  Role:{
    type:String,
    required:true,
  },
 Name:{
    type:String,
    required:true,
  },
    Email:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true
    }
})
const serviceSchema=new mongoose.Schema({
    Service:
    {
    type:String,
    required:true
    },
    ImageUrl:
    {
    type:String,
     required:true
     }
  })

  const parametersSchema=new mongoose.Schema({
    Service:
    {
    type:String,
    required:true
    },
   GoldenParameter:{
    type:[],
   },
   AddOnsParameter:{
    type:[]
   }
    
  })

  const optionsSchema=new mongoose.Schema({
    Category:
    {
    type:String,
    required:true
    },
    Parameter:
    {
    type:String,
     required:true
     },
     Option:
     {
    type:[],
     required:true
     }
  })
  const admin =new mongoose.model("admin",adminSchema)
  const service=new mongoose.model("Service",serviceSchema); 
  const parameter=new mongoose.model("Parameter",parametersSchema);
  const optionsModel=new mongoose.model("Service Options",optionsSchema); 
  module.exports= {admin,service,parameter,optionsModel};