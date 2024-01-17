const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

const serviceController = require("../controllers/serviceController");

router.get("/get", async (req, res) => {
  try {
    const service = await serviceController.get();
    res.json(service);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/create", upload.single("file"), async (req, res) => {
  const { title, description, details } = req.body;

  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  const url = `https://kind-ruby-worm-boot.cyclic.app/storage/${req.file.filename}`;

  try {
    const service = await serviceController.create(
      title,
      description,
      details,
      url
    );
    res.json(service);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/remove", async (req, res) => {
  try {
    const service = await serviceController.remove(req.body.id);
    res.json(service);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
