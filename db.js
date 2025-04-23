const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    const mongoURI = 'mongodb+srv://danereidcode:MdusDeBbh1YWWUXT@cluster0.k2lphnw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
  
    try {
      const conn = await mongoose.connect(mongoURI);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
      console.error('MongoDB connection error:', err);
      process.exit(1);
    }
  };

module.exports = connectDB;
