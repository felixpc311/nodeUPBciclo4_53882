const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    'nombre': {tipe: String},
    'email': {
        type: String,
        unique: true,
        required: true
    }
});

module.exports = mongoose.model('user', userSchema)