const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  details: { type: String },
  url: { type: String },
});

module.exports = mongoose.model("service", serviceSchema);
