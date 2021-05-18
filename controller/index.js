const bookServices = require('../services')

module.exports = class bookController {
    static async getAllBooks(req, res) {
        try{
            let allBooks = await bookServices.getAllBooks()

            res.json({status: "Successful", data: allBooks, error: null})
        } catch(err){
            res.status(500).json({error: true, message: err.message || "Can't get all books right now"})
        }
    }

    static async getABook(req, res) {
        try{
            let id = req.params.id
            let book = await bookServices.getABook(id)
            if(book){
                res.json({status: "Successful", data: book, error: null})
            } else{
                res.status(404).json({status: "Error", message: "Book not found", error: true})
            }
        } catch(err){
            res.status(500).json({error: true, message: err.message || "Can't get a book right now"})
        }
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