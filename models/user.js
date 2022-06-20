const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        email: String,
        password: Number,
        name: String,
        authId: String, // uid from google firebase auth JWT
    },
);

const User = mongoose.model('User', userSchema);
module.exports = User;