const mongoose = require('../connection');

const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    dob: Date,
})

const model = mongoose.model('users', schema);

module.exports = model;