const { serviceProvider } = require("../models/user")

const register=async(req,res)=>{
    if(!req.body.Role|| !req.body.Name || !req.body.Contact || !req.body.Email || req.body.Password)
    {
        res.status(400).json({msg:"All fields are required"})
    }
    if(req.body.Role=="Service Provider")
    {
        const user= serviceProvider.findOne({Email:req.body.Email})
        if(!user)
        {
            await serviceProvider.create({
                Name:data.Name,
                Contact:data.Contact,
                Email:data.Email,
                Password:data.Password
            })
        }
        else{
            res.json({msg:"This Email is already registered"})
        }
        if(req.body.Role=="Customer")
        {
            const user= customer.findOne({Email:req.body.Email})
            if(!user)
            {
                await customer.create({
                    Name:data.Name,
                    Contact:data.Contact,
                    Email:data.Email,
                    Password:data.Password
                })
            }
            else{
                res.json({msg:"This Email is already registered"})
            }
    }
}
module.exports={register}