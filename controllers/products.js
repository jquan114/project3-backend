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
        
    } catch (error) {
        console.log('error: ', error);
        res.send({error: 'something went wrong - check console'});
    }
});

// Create
router.post('/products', async (req, res) => {
    try {
        
    } catch (error) {
        console.log('error: ', error);
        res.send({error: 'something went wrong - check console'});
    }
});

// Delete
router.delete('/products/:id', async (req, res) => {
    try {

    } catch (error) {
        console.log('error: ', error);
        res.send({error: 'something went wrong - check console'});
    }
});

// Update
router.put('/products/:id', async (req, res) => {
    try {

    } catch (error) {
        console.log('error: ', error);
        res.send({error: 'something went wrong - check console'});
    }
});

module.exports = router;