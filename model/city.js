const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  name: { type: String },
});

module.exports = mongoose.model("city", citySchema);