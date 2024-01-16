const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  no: { type: String },
  phone: { type: Number },
  city: { type: String },
  statusId: { type: Number },
});

module.exports = mongoose.model("orders", orderSchema);
