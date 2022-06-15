// env vars
require('dotenv').config();
const { PORT , MONGO_URL } = process.env;
// dependencies
const express = require('express');
const app = express();
const cors = require('cors')
const morgan = require('morgan');
const mongoose = require('mongoose');

// models and controllers
const productsController = require('./controllers/products');

// mongodb connection
mongoose.connect(MONGO_URL)
mongoose.connection
    .on("open", () => console.log("mongoose connected"))
    .on("close", () => console.log("mongoose disconnected"))
    .on("error", (error) => console.log(error))

// Middleware
app.use(cors());
app.use(morgan('dev'));

// CONTROLLER
app.use('/store', productsController);

app.get('/', (req, res) => {
    res.send('This is the General Store');
});


// Listener
app.listen(PORT, () => console.log(`Listening...`));