const mongoose = require("mongoose");

const orderbannerSchema = new mongoose.Schema({
  url: { type: String },
});

module.exports = mongoose.model("orderbanner", orderbannerSchema);
