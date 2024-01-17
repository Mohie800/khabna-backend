const express = require("express");
const router = express.Router();

const homeBannerController = require("../controllers/homeBannerController");
const upload = require("../middleware/upload");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/get", async (req, res) => {
  try {
    const homeBanner = await homeBannerController.get();
    res.json(homeBanner);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/create", authMiddleware, async (req, res) => {
  try {
    const homeBanner = await homeBannerController.create(req.body.link);
    res.json({ homeBanner });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post(
  "/update",
  authMiddleware,
  upload.single("file"),
  async (req, res) => {
    try {
      const homeBanner = await homeBannerController.Edit(
        req.body.id,
        req.body.link
      );
      res.json(homeBanner);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
);

router.post("/rm", authMiddleware, async (req, res) => {
  try {
    const homeBanner = await homeBannerController.remove(req.body.id);
    res.json(homeBanner);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
