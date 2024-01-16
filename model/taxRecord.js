const mongoose = require("mongoose");

const taxRecordSchema = new mongoose.Schema({
  number: { type: String },
  url: { type: String },
  url1: { type: String },
});

module.exports = mongoose.model("taxRecord", taxRecordSchema);
