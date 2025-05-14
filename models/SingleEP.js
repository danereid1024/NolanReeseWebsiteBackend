const mongoose = require('mongoose');

const singlesEPSchema = new mongoose.Schema({
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
    },
    coverImageUrl: {
        type: String,
        required: true,
    }
    });

    module.exports = mongoose.model('SingleEP', singlesEPSchema);