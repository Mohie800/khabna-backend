const express = require("express");
const router = express.Router();
const logoController = require("../controllers/logoController");
const homeBannerController = require("../controllers/homeBannerController");
const orderBannerController = require("../controllers/orderBannerController");
const cityController = require("../controllers/cityController");
const taxController = require("../controllers/taxController");
const registerController = require("../controllers/registerController");

router.get("/get", async (req, res) => {
  try {
    const logo = await logoController.get();
    const homeBanner = await homeBannerController.get();
    const orderBanner = await orderBannerController.get();
    const cities = await cityController.getCity();
    const tax = await taxController.getNumber();
    const reg = await registerController.getNumber();
    res.json({ logo, homeBanner, orderBanner, cities, tax, reg });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
