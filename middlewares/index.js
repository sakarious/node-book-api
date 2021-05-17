const express = require('express')
require('dotenv').config()

module.exports = (app) => {

    app.use(express.urlencoded({extended: false}))

    app.use(express.json())

}