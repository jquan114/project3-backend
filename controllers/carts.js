const express = require('express');
const Cart = require('../models/cart.js');

const router = express.Router();

// ROUTES
// Show
router.get('/:uid', async (req, res) => {
    try {
        res.json(await Cart.find({UID: uid}));
    } catch (error) {
        res.status(400).json(error);
    }
});

// Create
router.post('/', async (req, res) => {
    try {
        res.json(await User.create(req.body))
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;