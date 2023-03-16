const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const CustomError = require("../helpers/customErrorClass");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      city: req.body.city,
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      throw new CustomError("User not found", 404);
    }

    //Could also write it as
    //if(!user){
    //  res.status(404).json("User not found");
    //  return;
    //}

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      throw new CustomError("Incorrect Password", 400);
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(err.code || 500).json(err.message);
  }
});

module.exports = router;
