const express = require("express");
const router = express.Router();

const registerController = require("../controllers/registerController");
const upload = require("../middleware/upload");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/get", async (req, res) => {
  try {
    const register = await registerController.getNumber();
    res.json(register);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/create", async (req, res) => {
  try {
    const register = await registerController.createNumber(req.body.number);
    res.json({ register });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/update", authMiddleware, async (req, res) => {
  try {
    const register = await registerController.EditNumber(
      req.body.id,
      req.body.number,
      req.body.link,
      req.body.authNo
    );
    res.json(register);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
