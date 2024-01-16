const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: [String, null], default: null },
  userName: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
  permissions: { type: String, default: "admin" },
});

module.exports = mongoose.model("user", userSchema);
