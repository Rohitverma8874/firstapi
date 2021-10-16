const mongoose = require('../connection');

const schema = new mongoose.Schema({

    title: String,
    description: String,
    category: String,
    thumbnail: String,
    file: String,
    created: { type: Date, default: new Date() }

})


const model = mongoose.model('videos', schema);

module.exports = model;