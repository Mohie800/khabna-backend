const mongoose = require("mongoose");

const complainSchema = new mongoose.Schema({
  name: { type: String },
  city: { type: String },
  neighberhood: { type: String },
  phone: { type: String },
  type: { type: String },
  description: { type: String },
  statusId: { type: Number },
});

module.exports = mongoose.model("complain", complainSchema);
