const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: { type: String },
  age: { type: String },
  sex: { type: String },
  phone: { type: String },
  city: { type: String },
  nationality: { type: String },
  job: { type: String },
  education: { type: String },
  xp: { type: String },
  statusId: { type: Number },
  id: { type: Number },
  file: { type: String },
});

module.exports = mongoose.model("employee", employeeSchema);
