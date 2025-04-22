const connectDB = require('../db.js');
const Album = require('../models/Album');
const albums = require('./seed.json');

async function seedDB() {
  try {
    await connectDB();
    await Album.deleteMany();
    await Album.insertMany(albums);
    console.log('Database seeded successfully!');
    process.exit();
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}
seedDB();
