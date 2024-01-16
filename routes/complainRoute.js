const express = require("express");
const router = express.Router();

const complainController = require("../controllers/complainController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/get", async (req, res) => {
  try {
    const order = await complainController.get();
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.get("/new", async (req, res) => {
  try {
    const order = await complainController.getNew();
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.get("/pending", async (req, res) => {
  try {
    const order = await complainController.getProccess();
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.get("/complete", async (req, res) => {
  try {
    const order = await complainController.getComplete();
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/create", async (req, res) => {
  const { name, city, neighberhood, phone, type, description, statusId } =
    req.body;
  try {
    const order = await complainController.create(
      name,
      city,
      neighberhood,
      phone,
      type,
      description,
      statusId
    );
    res.json({ order });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/update", async (req, res) => {
  try {
    const order = await complainController.update(
      req.body.id,
      req.body.statusId
    );
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/remove", async (req, res) => {
  try {
    const order = await complainController.remove(req.body.id);
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
