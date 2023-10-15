const mongoose = require("mongoose");

const schema=new mongoose.Schema({
    Role:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Contact:{
        type:Number,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    },
    Service:{
        type:String
    }
},{timestamps:true})

const serviceProvider=new mongoose.model("Service Provider",schema);
const Customer=new mongoose.model("Customer",schema)

module.exports={serviceProvider,Customer}