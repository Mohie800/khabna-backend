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
router.post("/update", authMiddleware, async (req, res) => {
  try {
    const taxRecord = await taxController.EditNumber(
      req.body.id,
      req.body.number,
      req.body.link
    );
    res.json(taxRecord);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/update-url", authMiddleware, async (req, res) => {
  try {
    const taxRecord = await taxController.EditUrl(req.body.id, req.body.link);
    res.json(taxRecord);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
