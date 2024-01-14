const { Schema, model } = require("mongoose");

const categorySchema = Schema({
  name: String,
  slug: String,
  featured: String,
  images: [{ id: Number, name: String, url: String }],
});

module.exports = model("Category", categorySchema);
