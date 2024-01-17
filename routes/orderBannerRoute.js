const express = require("express");
const router = express.Router();

const orderBannerController = require("../controllers/orderBannerController");
const upload = require("../middleware/upload");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/get", async (req, res) => {
  try {
    const homeBanner = await orderBannerController.get();
    res.json(homeBanner);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/create", async (req, res) => {
  try {
    const homeBanner = await orderBannerController.create(req.body.link);
    res.json({ homeBanner });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/update", authMiddleware, async (req, res) => {
  let url = null;
  try {
    const homeBanner = await orderBannerController.Edit(
      req.body.id,
      req.body.link
    );
    res.json(homeBanner);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/rm", async (req, res) => {
  try {
    const homeBanner = await orderBannerController.remove(req.body.id);
    res.json(homeBanner);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
