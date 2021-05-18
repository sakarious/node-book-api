const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = Schema({
    title: {
        type: String,
        required: true
    },
    author: String,
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['Fictional', 'Non-Fictional', 'Comics', 'Others'],
        required: true
    },
    purchaseCount: {
        type: Number,
        default: 0
    },
    imageURL: [],
    tags: []
})

const bookModel = mongoose.model('books', bookSchema)

module.exports = bookModel

