const mongoose = require('mongoose');

const gameMusicSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    spotifyId: {
        type: String,
        required: true,
    }
    });

    module.exports = mongoose.model('GameMusic', gameMusicSchema);