const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('authors', authorSchema);