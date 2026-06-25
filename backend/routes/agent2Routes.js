const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  res.json({ message: "Agent 2 - Content Idea Generation" });
});

module.exports = router;