const express = require('express');
const User = require('../models/user.js');

const router = express.Router();

// ROUTES
// Index
router.get('/', async (req, res) => {
    try {
        res.json(await User.find({}));
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