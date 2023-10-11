require("dotenv").config()
const jwt=require("jsonwebtoken")


function setToken(user)
{
    console.log("user",user._id)
 console.log(process.env.jwtSecret)
   return jwt.sign({
        _id:user._id,
        Role:user.Role
    },process.env.jwtSecret,{ expiresIn: '5s' });
    
}
function getUser(token)
{
    return jwt.verify(token,process.env.jwtSecret)
}
module.exports={setToken,getUser}