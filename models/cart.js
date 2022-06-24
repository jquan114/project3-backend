const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema(
    {
        UID: String, // uid from google firebase auth JWT
        products: Array,
    },
);

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;