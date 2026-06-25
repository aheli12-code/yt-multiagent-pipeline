const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  res.json({ message: "Agent 4 - Thumbnail Generation" });
});

module.exports = router;