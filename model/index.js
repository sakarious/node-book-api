const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = Schema({
    title: {
        type: String,
        required: true
    },
    author: String,
    description: String,
    category: {
        type: String,
        enum: ['Fictional', 'Non-Fictional', 'Comics', 'Others'],
        required: true
    },
    purchaseCount: Number,
    imageURL: String,
    tags: []
})