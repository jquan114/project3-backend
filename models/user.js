const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        email: String,
        password: String,
        name: String,
        uid: String, // uid from google firebase auth JWT
    },
    { timestamps }
);

const User = mongoose.model('User', userSchema);
module.exports = User;