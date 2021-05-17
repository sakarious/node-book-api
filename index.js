const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const routes = require('./routes')
const middlewares = require('./middlewares')

// Middlewares
middlewares(app)

// Route
routes(app)

app.listen(PORT, () => {
    console.log('Server is listening on', PORT);
})