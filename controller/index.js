module.exports = class bookController {
    static async getAllBooks(req, res) {
        res.send('Live from controller')
    }
}