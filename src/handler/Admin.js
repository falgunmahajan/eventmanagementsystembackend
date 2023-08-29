const { service, parameter } = require("../models/admin")

const addServices=async(req,res)=>{
    if(!req.body.Service || !req.file)
{
return res.status(400).json({msg:"All fields are required"})
}
try{
    const result=await service.create({
        Service:req.body.Service,
        ImageUrl:req.file.filename
      })
      res.status(201).json({Service:result})
}
catch(err){
    res.status(400).json({msg:"Something went wrong"})
}
}
const addParameters=async(req,res)=>{
 console.log(req.body)
 if(!req.body.Services)
{
return res.status(400).json({msg:"All fields are required"})
}
try{
    const service=await parameter.findOne({Service:req.body.Services})
    console.log(service)
    if(service)
    {
        if(req.body.TypeOfParameter=="GoldenParameters")
        {
           const user= await parameter.updateOne({
               Service:req.body.Services
              },{
                $push:{GoldenParameter:{$each:req.body.Parameters}}
              })
              res.json(user)
        }
        if(req.body.TypeOfParameter=="AddOnsParameters")
        {
            const user=await parameter.updateOne({
               Service:req.body.Services
              },
               
                {$push:{AddOnsParameter:{$each:req.body.Parameters}}}
             )
              res.json(user)
        }
    }
    else{
        if(req.body.TypeOfParameter=="GoldenParameters")
        {
            const user= await parameter.create({
                Service:req.body.Services,
                GoldenParameter:req.body.Parameters
            })
            res.json(user)
        }
        if(req.body.TypeOfParameter=="AddOnsParameters")
        {
            const user= await parameter.create({
                Service:req.body.Services,
                AddOnsParameter:req.body.Parameters
            })
            res.json(user)
        }
    }
}
catch(err){
    console.log(err)
    res.status(400).json({msg:"Something went wrong"})
}
}
module.exports={addServices , addParameters}