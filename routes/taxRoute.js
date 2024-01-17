const express = require("express");
const router = express.Router();

const taxController = require("../controllers/taxController");
const upload = require("../middleware/upload");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/get", async (req, res) => {
  try {
    const taxRecord = await taxController.getNumber();
    res.json(taxRecord);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/create", authMiddleware, async (req, res) => {
  try {
    const taxRecord = await taxController.createNumber(req.body.number);
    res.json({ taxRecord });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post(
  "/update",
  authMiddleware,
  upload.single("file"),
  async (req, res) => {
    let url = null;

    if (req.file) {
      url = `https://kind-ruby-worm-boot.cyclic.app/storage/${req.file.filename}`;
    }

    try {
      const taxRecord = await taxController.EditNumber(
        req.body.id,
        req.body.number,
        url
      );
      res.json(taxRecord);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
);
router.post(
  "/update-url",
  authMiddleware,
  upload.single("file"),
  async (req, res) => {
    let url = null;

    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }

    url = `https://kind-ruby-worm-boot.cyclic.app/storage/${req.file.filename}`;
    try {
      const taxRecord = await taxController.EditUrl(req.body.id, url);
      res.json(taxRecord);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
);

module.exports = router;
