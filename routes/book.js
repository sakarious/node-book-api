const express = require('express')
const router = express.Router()
const bookController = require('../controller')

//Get all Books
router.get('/', (req, res) => {
    bookController.getAllBooks(req, res)
})

module.exports = router