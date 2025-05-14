const express = require('express');
const router = express.Router();
const SingleEP = require('../models/GameMusic');

router.get('/', async (req, res) => {
    try {
        const gameMusic = await GameMusic.find();
        res.json(gameMusic);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;