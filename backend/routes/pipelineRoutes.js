const express = require("express");
const router = express.Router();

router.post("/start", async (req, res) => {
  res.json({ message: "Pipeline started" });
});

router.get("/:id", async (req, res) => {
  res.json({ message: "Pipeline status" });
});

router.post("/:id/select-idea", async (req, res) => {
  res.json({ message: "Idea selected" });
});

module.exports = router;