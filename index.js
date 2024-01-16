require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require("./config/database");
const route = require('./routes/sensorRoute');

const app = express();
app.use(cors());
app.use(bodyParser.json());

connectDB();
app.use('/api', route);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
});