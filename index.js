const express = require('express');
const mongoose = require('mongoose');
const albumRoutes = require('./routes/albumsRoutes');
const path = require('path');
const app = express();
const cors = require('cors');
const connectDB = require('./db');



app.use(express.json());
app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'assets')));
app.use('/api/albums', albumRoutes);

connectDB();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
//MdusDeBbh1YWWUXT