const {State}=require("country-state-city");
let states=State.getStatesOfCountry("IN")
console.log(states)
const getLocations=async(req,res)=>{
res.status(200).json(states)
}
module.exports={getLocations}