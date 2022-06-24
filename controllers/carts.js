const express = require('express');
const Cart = require('../models/cart.js');

const router = express.Router();

// ROUTES
// Index
router.get('/', async (req, res) => {
    try {
        res.json(await Cart.find());
    } catch (error) {
        res.status(400).json(error);
    }
});

// Show User Cart
router.get('/:uid', async(req,res) => {
    try {
        res.json(await Cart.find({UID: req.params.uid}));
    } catch (error) {
        res.status(400).json(error);
    }
})

// Create
router.post('/', async (req, res) => {
    try {
        res.json(await Cart.create(req.body))
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;