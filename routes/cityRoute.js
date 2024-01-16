const express = require("express");
const router = express.Router();

const cityController = require("../controllers/cityController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/get", async (req, res) => {
  try {
    const city = await cityController.getCity();
    res.json(city);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/create", authMiddleware, async (req, res) => {
  try {
    const city = await cityController.createCity(req.body.name);
    res.json({ city });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/update", async (req, res) => {
  try {
    const city = await cityController.EditCity(req.body.id, req.body.name);
    res.json(city);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/remove", async (req, res) => {
  try {
    const city = await cityController.remove(req.body.id);
    res.json(city);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
