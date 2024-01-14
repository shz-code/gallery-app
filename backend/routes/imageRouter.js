const express = require("express");
const router = express.Router();
const Image = require("../models/image");

router.route("/").get(async (req, res) => {
  try {
    const images = await Image.find();
    setTimeout(() => {
      return res.send(images);
    }, 2000);
  } catch (err) {
    return res.status(400).status("Bad Request");
  }
});

module.exports = router;
