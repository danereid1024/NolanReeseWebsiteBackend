const express = require('express');
const router = express.Router();
const Album = require('../models/Album');

router.get('/', async (req, res) => {
    try {
        const albums = await Album.find();
        res.json(albums);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;