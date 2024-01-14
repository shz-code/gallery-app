const { Schema, model } = require("mongoose");

const imageSchema = Schema({
  name: String,
  category: String,
  url: String,
});

module.exports = model("Image", imageSchema);
