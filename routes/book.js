const express = require('express')
const router = express.Router()
const bookController = require('../controller')
const userController = require('../controller/user')

//Get all Books
router.get('/', userController.loginRequired, (req, res) => {
    bookController.getAllBooks(req, res)
})

// Get a book by description
router.get('/:id', (req, res) => {
    bookController.getABook(req, res)
})

// Add a book
router.post('/', (req, res) => {
    bookController.addABook(req, res)
})

// Edit a book in catalog
router.put('/:id', (req, res) => {
    bookController.editABook(req, res)
})

// Delete a book
router.delete('/:id', (req, res) => {
    bookController.deleteABook(req, res)
})
module.exports = router