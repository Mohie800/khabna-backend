const express = require("express");
const router = express.Router();

const orderBannerController = require("../controllers/orderBannerController");
const upload = require("../middleware/upload");

router.get("/get", async (req, res) => {
  try {
    const homeBanner = await orderBannerController.get();
    res.json(homeBanner);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/create", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  const url = `http://localhost:3001/storage/${req.file.filename}`;

  try {
    const homeBanner = await orderBannerController.create(url);
    res.json({ homeBanner });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/update", upload.single("file"), async (req, res) => {
  let url = null;

  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  url = `http://localhost:3001/storage/${req.file.filename}`;

  try {
    const homeBanner = await orderBannerController.Edit(req.body.id, url);
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
