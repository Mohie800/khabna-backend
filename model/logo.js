const mongoose = require("mongoose");

const logo = new mongoose.Schema({
  url: { type: String },
});

module.exports = mongoose.model("logo", logo);
