const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.route("/").post(async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, salt);

  const checkUser = await User.findOne({ email: req.body.email });
  if (checkUser) return res.status(400).send("Email already exists");

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hash,
  });

  try {
    await user.save();
    return res.send({
      name: req.body.name,
      email: req.body.email,
    });
  } catch (err) {
    return res.status(400).send("Bad Request");
  }
});

router.route("/login").post(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("User not registered");

  try {
    const checkUser = await bcrypt.compare(req.body.password, user.password);
    if (checkUser) return res.send({ name: user.name, email: user.email });
    else res.status(400).send("Wrong Password");
  } catch (err) {
    return res.status(400).send("Bad Request");
  }
});

module.exports = router;
