const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel

