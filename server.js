// DEPENDENCIES
const express = require('express');
const app = express();
const cors = require('cors')
const morgan = require('morgan');
require('dotenv').config();
const productsController = require('./controllers/products');

// Middleware
app.use(cors());
app.use(morgan('dev'));

// CONTROLLER
app.use('/store', productsController);

app.get('/', (req, res) => {
    res.send('This is the General Store');
});


// Listener
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));