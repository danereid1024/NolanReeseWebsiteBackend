const connectDB = require('../db.js');
const Album = require('../models/Album.js');
const SingleEP = require('../models/SingleEP.js');
const GameMusic = require('../models/GameMusic.js');
const albums = require('./albums.json');
const singlesEP = require('./singlesEP.json');
const gameMusic = require('./gameMusic.json');

async function seedDB() {
  try {
    await connectDB();
    await Album.deleteMany();
    await Album.insertMany(albums);
    await SingleEP.deleteMany();
    await SingleEP.insertMany(singlesEP);
    await GameMusic.deleteMany();
    await GameMusic.insertMany(gameMusic);
    console.log('Database seeded successfully!');
    process.exit();
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}
seedDB();
