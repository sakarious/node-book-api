const bookRoutes = require('./book')

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('Live')
    })

    app.use('/api', bookRoutes)
}