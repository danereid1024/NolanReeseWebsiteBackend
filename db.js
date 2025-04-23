const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    const mongoURI = process.env.MONGO_URI;
    
    try {
      const conn = await mongoose.connect(mongoURI);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
      console.error('MongoDB connection error:', err);
      process.exit(1);
    }
  };

module.exports = connectDB;
