const bookRoutes = require('./book')
const userRoutes = require('./users')

module.exports = (app) => {
    app.use('/',userRoutes)
    app.use('/api', bookRoutes)
}