const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  number: { type: String },
  url: { type: String },
  authNo: { type: String },
});

module.exports = mongoose.model("register", registerSchema);
