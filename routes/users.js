const express = require('express')
const router = express.Router()
const userController = require('../controller/user')

router.post('/register', (req, res) => {
    userController.Register(req, res)
})

router.get('/login', (req, res) => {
    userController.Login(req, res)
})

module.exports = router