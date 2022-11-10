const express = require("express");
const UserModel = require("../Model/User.Model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userController = express.Router();

userController.post("/signup", (req, res) => {
  const { email, name, password } = req.body;
  bcrypt.hash(password, 10, async function (err, hash) {
    if (err) {
      return res.send("Please try again");
    }
    const user = new UserModel({
      email,
      name,
      password: hash,
    });

    await user.save();
    res.send("signup Successfully!");
  });
});

userController.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.send("Invalid Credentials");
  }
  const hash = user.password;
  const userId = user._id;
  bcrypt.compare(password, hash, function (err, result) {
    if (result) {
      var token = jwt.sign({ email, userId }, "shhhhh");
      return res.send({ message: "Login Success", token });
    } else {
      res.send("Invalid Credentials");
    }
  });
});

module.exports = userController;