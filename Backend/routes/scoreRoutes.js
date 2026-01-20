const express = require("express");
const router = express.Router();
const Score = require("../models/Score");

// POST - save score
router.post("/", async (req, res) => {
    const { name, score } = req.body;
    await Score.create({ name, score });
    res.json({ message: "Score saved" });
});

// GET - leaderboard
router.get("/", async (req, res) => {
    const scores = await Score.find().sort({ score: -1 }).limit(5);
    res.json(scores);
});

module.exports = router;
