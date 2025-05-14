const express = require('express');
const router = express.Router();
const SingleEP = require('../models/SingleEP');

router.get('/', async (req, res) => {
    try {
        const singlesEP = await SingleEP.find();
        res.json(singlesEP);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;