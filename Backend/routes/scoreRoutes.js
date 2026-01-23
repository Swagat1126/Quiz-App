const express = require("express");
const router = express.Router();
const Score = require("../models/Score");

/* Save score */
router.post("/", async (req, res) => {
    try {
        const { name, score } = req.body;

        if (!name || score === undefined) {
            return res.status(400).json({ message: "Invalid data" });
        }

        await Score.create({ name, score });
        res.status(201).json({ message: "Score saved successfully" });
    } catch (err) {
        console.error("POST /api/scores error:", err);
        res.status(500).json({ error: "Server error" });
    }
});


router.get("/", async (req, res) => {
    try {
        const scores = await Score.find()
            .sort({ score: -1 })
            .limit(5);

        res.json(scores);
    } catch (err) {
        console.error("GET /api/scores error:", err);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
