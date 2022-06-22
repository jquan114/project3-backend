const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        email: String,
        role: String,
        UID: String, // uid from google firebase auth JWT
    },
);

const User = mongoose.model('User', userSchema);
module.exports = User;