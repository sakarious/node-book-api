const express = require('express')
const router = express.Router()
const bookController = require('../controller')

//Get all Books
router.get('/', (req, res) => {
    bookController.getAllBooks(req, res)
})

// Get a book by description
router.get('/:bookName', (req, res) => {
    bookController.getABook(req, res)
})

// Add a book
router.post('/', (req, res) => {
    bookController.addABook(req, res)
})

// Edit a book in catalog
router.put('/:bookName', (req, res) => {
    bookController.editABook(req, res)
})

// Delete a book
router.delete('/:bookName', (req, res) => {
    bookController.deleteABook(req, res)
})
module.exports = router