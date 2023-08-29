const { serviceProvider, Customer } = require("../models/user");

const register = async (req, res) => {
  console.log(req.body);
  if (
    !req.body.Role ||
    !req.body.Name ||
    !req.body.Contact ||
    !req.body.Email ||
    !req.body.Password
  ) {
    res.status(400).json({ msg: "All fields are required" });
  }
  if (req.body.Role == "Service Provider") {
    const user = await serviceProvider.findOne({ Email: req.body.Email });
    if (!user) {
      const newUser = await serviceProvider.create({
        Role: req.body.Role,
        Name: req.body.Name,
        Contact: req.body.Contact,
        Email: req.body.Email,
        Password: req.body.Password,
      });
      res.status(201).json(newUser);
    } else {
      res.status(400).json({ msg: "This Email is already registered" });
    }
  }
  if (req.body.Role == "Customer") {
    const user = await Customer.findOne({ Email: req.body.Email });
    console.log(user);
    if (!user) {
      const newUser = await Customer.create({
        Role: req.body.Role,
        Name: req.body.Name,
        Contact: req.body.Contact,
        Email: req.body.Email,
        Password: req.body.Password,
      });
      res.status(201).json(newUser);
    } else {
      res.status(400).json({ msg: "This Email is already registered" });
    }
  }
};
module.exports = { register };
