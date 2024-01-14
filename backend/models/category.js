const { Schema, model } = require("mongoose");

const categorySchema = Schema({
  name: String,
  slug: String,
  url: String,
});

module.exports = model("Category", categorySchema);
