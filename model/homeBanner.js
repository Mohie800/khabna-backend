const mongoose = require("mongoose");

const homeBannerSchema = new mongoose.Schema({
  url: { type: String },
});

module.exports = mongoose.model("homeBanner", homeBannerSchema);
