const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

const serviceController = require("../controllers/serviceController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/get", async (req, res) => {
  try {
    const service = await serviceController.get();
    res.json(service);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/create", authMiddleware, async (req, res) => {
  const { title, description, details, link } = req.body;
  try {
    const service = await serviceController.create(
      title,
      description,
      details,
      link
    );
    res.json(service);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/remove", authMiddleware, async (req, res) => {
  try {
    const service = await serviceController.remove(req.body.id);
    res.json(service);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
