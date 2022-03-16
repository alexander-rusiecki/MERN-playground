const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api/dogs', require('./routes/dogRoutes'));
app.use(errorHandler);

app.listen(port, () =>
  console.log(`server running on port: ${process.env.PORT}`)
);
