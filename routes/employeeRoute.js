const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employeeController");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

router.get("/get", authMiddleware, async (req, res) => {
  try {
    const order = await employeeController.get();
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.get("/new", authMiddleware, async (req, res) => {
  try {
    const order = await employeeController.getNew();
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.get("/pending", authMiddleware, async (req, res) => {
  try {
    const order = await employeeController.getProccess();
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.get("/complete", authMiddleware, async (req, res) => {
  try {
    const order = await employeeController.getComplete();
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/create", upload.single("file"), async (req, res) => {
  const {
    name,
    age,
    sex,
    phone,
    city,
    nationality,
    job,
    education,
    xp,
    statusId,
  } = req.body;
  let url = null;

  if (req.file) {
    url = `https://kind-ruby-worm-boot.cyclic.app/storage/${req.file.filename}`;
  }
  try {
    const order = await employeeController.create(
      name,
      age,
      sex,
      phone,
      city,
      nationality,
      job,
      education,
      xp,
      statusId,
      url
    );
    res.json({ order });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/update", async (req, res) => {
  try {
    const order = await employeeController.update(
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
    const order = await employeeController.remove(req.body.id);
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
