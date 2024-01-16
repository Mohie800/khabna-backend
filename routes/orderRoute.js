const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/get", async (req, res) => {
  try {
    const order = await orderController.get();
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.get("/new", async (req, res) => {
  try {
    const order = await orderController.getNew();
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.get("/pending", async (req, res) => {
  try {
    const order = await orderController.getProccess();
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.get("/complete", async (req, res) => {
  try {
    const order = await orderController.getComplete();
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/create", async (req, res) => {
  const { no, phone, city, statusId } = req.body;
  try {
    const order = await orderController.create(no, phone, city, statusId);
    res.json({ order });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/update", async (req, res) => {
  try {
    const order = await orderController.update(req.body.id, req.body.statusId);
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/remove", async (req, res) => {
  try {
    const order = await orderController.remove(req.body.id);
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
