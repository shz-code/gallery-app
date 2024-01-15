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

router.route("/:id").post(async (req, res) => {
  const id = req.params.id;
  try {
    const image = await Image.findById(id);
    if (!image) res.status("404").send("Not Found");
    image.comments.push(req.body);
    image.save();
    return res.status(200).send(image.comments);
  } catch (err) {
    return res.status(404).send("Not Found");
  }
});

module.exports = router;
