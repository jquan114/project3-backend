// env vars
require('dotenv').config();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

// dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const admin = require('firebase-admin');

// models and controllers
const productsController = require('./controllers/products');

// mongodb connection
mongoose.connect(MONGO_URL)
mongoose.connection
    .on("open", () => console.log("mongoose connected"))
    .on("close", () => console.log("mongoose disconnected"))
    .on("error", (error) => console.log(error))

// firebase admin token
admin.initializeApp({
    credential: admin.credential.cert(require('./firebase-service-key.json'))
});

// middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// custom firebase middleware function
app.use(async (req, res, next) => {
    const token = req.get('Authorization')
    if (token) {
        try {
            const user = await admin.auth().verifyIdToken(token.replace('Bearer ', ''))
            req.user = user;
        } catch (error) {
            req.user = null
        }
    } else req.user = null
    next();
})

// routes and controllers
app.get('/', (req, res) => res.send('This is the General Store'));
app.use('/products', productsController);

// Listener
app.listen(PORT, () => console.log(`Listening...`));