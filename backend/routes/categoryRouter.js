const express = require("express");
const router = express.Router();
const Category = require("../models/category");

router.route("/").get(async (req, res) => {
  try {
    const categories = await Category.find();
    setTimeout(() => {
      return res.send(categories);
    }, 2000);
  } catch (err) {
    return res.status(400).status("Bad Request");
  }
});

module.exports = router;
