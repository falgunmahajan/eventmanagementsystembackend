const { setToken } = require("../../jwt");
const { admin } = require("../models/admin");
const { Customer, serviceProvider } = require("../models/user");

const auth = async (req, res) => {
    console.log(req.body,"req")
    console.log(req.body.Role,"role")
    let user;
    if (!req.body.Role) {
            user = await admin.findOne({ Email: req.body.Email, Password: req.body.Password })
    }
    if(req.body.Role=="Customer"){
        user= await Customer.findOne({ Email: req.body.Email, Password: req.body.Password })
    }
    if(req.body.Role=="Service Provider"){
        user= await serviceProvider.findOne({ Email: req.body.Email, Password: req.body.Password })
    }
            console.log(user)
        if (user) {
            const token = setToken(user)
            console.log(token)
            // res.cookie("id", token)
            res.status(201).json({user,token})
        }
        else {
            res.status(401).json({ message: "Invalid Email or Password" })
        }

}
module.exports = { auth }