const express = require("express");
const router = express.Router();

const homeBannerController = require("../controllers/homeBannerController");
const upload = require("../middleware/upload");

router.get("/get", async (req, res) => {
  try {
    const homeBanner = await homeBannerController.get();
    res.json(homeBanner);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/create", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  const url = `https://khabna.onrender.com/storage/${req.file.filename}`;

  try {
    const homeBanner = await homeBannerController.create(url);
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

  url = `https://khabna.onrender.com/storage/${req.file.filename}`;

  try {
    const homeBanner = await homeBannerController.Edit(req.body.id, url);
    res.json(homeBanner);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/rm", async (req, res) => {
  try {
    const homeBanner = await homeBannerController.remove(req.body.id);
    res.json(homeBanner);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
