const mongoose = require("mongoose");

const complainSchema = new mongoose.Schema({
  name: { type: String },
  city: { type: String },
  neighberhood: { type: String },
  phone: { type: String },
  type: { type: String },
  description: { type: String },
  statusId: { type: Number },
  id: { type: Number, default: Math.random(5).toFixed(5) * 100000 },
});

module.exports = mongoose.model("complain", complainSchema);
