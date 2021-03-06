// DEPENDENCIES
const { Router } = require('express');
const express = require('express');
const Product = require('../models/Product.js')

// Initialize
const router = express.Router();

// ROUTES
// Index
router.get('/', async (req, res) => {
    try {
        res.json(await Product.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});

// Create
router.post('/', async (req, res) => {
    try {
        res.json(await Product.create(req.body))
    } catch (error) {
        res.status(400).json(error);
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        res.json(await Product.findByIdAndDelete(req.params.id))
    } catch (error) {
        res.status(400).json(error);
    }
});

// Update
router.put('/:id', async (req, res) => {
    try {
        res.json(
            await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        console.log('error: ', error);
        res.send({error: 'something went wrong - check console'});
    }
});

// Show
router.get('/:id', async (req, res) => {
    try {
        res.json(await Product.findById(req.params.id))
    } catch (error) {
        console.log('error: ', error);
        res.send({error: 'something went wrong - check console'});
    }
});
 
module.exports = router;