const express = require("express");
const router = express.Router();

const taxController = require("../controllers/taxController");
const upload = require("../middleware/upload");

router.get("/get", async (req, res) => {
  try {
    const taxRecord = await taxController.getNumber();
    res.json(taxRecord);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/create", async (req, res) => {
  try {
    const taxRecord = await taxController.createNumber(req.body.number);
    res.json({ taxRecord });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/update", upload.single("file"), async (req, res) => {
  let url = null;

  if (req.file) {
    url = `http://localhost:3001/storage/${req.file.filename}`;
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
});
router.post("/update-url", upload.single("file"), async (req, res) => {
  let url = null;

  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  url = `http://localhost:3001/storage/${req.file.filename}`;
  try {
    const taxRecord = await taxController.EditUrl(req.body.id, url);
    res.json(taxRecord);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
