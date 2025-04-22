const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    albumId: {
        type: Number,
        required: true,
        unique: true,
    },
    albumTitle: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    albumReleaseDate: {
        type: Date,
        required: true,
    },
    albumGenre: {
        type: String,
        required: true,
    },
    coverImageUrl: {
        type: String,
        required: true,
    },
    trackList: [
        {
            songId: {
                type: Number,
                required: true,
            },
            songTitle: {
                type: String,
                required: true,
            },
            duration: {
                type: String,
                required: true,
            },
            artist: {
                type: String,
                required: true,
            },
            songGenre: {
                type: String,
                required: true,
            },
            songReleaseDate: {
                type: Date,
                required: true,
            },
        },
    ],
    });

    module.exports = mongoose.model('Album', albumSchema);