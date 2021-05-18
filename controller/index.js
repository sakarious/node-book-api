module.exports = class bookController {
    static async getAllBooks(req, res) {
        res.send('Live from controller')
    }

    static async getABook(req, res) {
        res.send('GET A BOOK: Live from controller')
    }

    static async addABook(req, res) {
        res.send('ADD A BOOK: Live from controller')
    }

    static async editABook(req, res) {
        res.send('EDIT A BOOK: Live from controller')
    }

    static async deleteABook(req, res) {
        res.send('DELETE A BOOK: Live from controller')
    }
}