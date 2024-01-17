const express = require("express");
const router = express.Router();

const logoController = require("../controllers/logoController");
const upload = require("../middleware/upload");

router.get("/get", async (req, res) => {
  try {
    const logo = await logoController.get();
    res.json(logo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/create", async (req, res) => {
  try {
    const logo = await logoController.create();
    res.json({ logo });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/update", upload.single("file"), async (req, res) => {
  let url = null;

  if (req.file) {
    url = `https://khabna.onrender.com/storage/${req.file.filename}`;
  }

  try {
    const logo = await logoController.Edit(req.body.id, url);
    res.json(logo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
