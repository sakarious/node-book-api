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
                res.json({status: "Found", data: book, error: null})
            } else{
                res.status(404).json({status: "Not Found", message: "Book not found", error: null})
            }
        } catch(err){
            res.status(500).json({error: true, message: err.message || "Can't get a book right now"})
        }
    }

    static async addABook(req, res) {
        try{
            console.log(req.body);
            let title = req.body.title
            let author = req.body.author
            let description = req.body.description
            let category = req.body.category
            let imageURL = (req.body.imageURL) ? req.body.imageURL : 'none'
            let tags = (req.body.tags) ? req.body.tags : 'book'

            let newBook = await bookServices.addABook(title, author, description, category, imageURL, tags)

            res.status(201).json({status: "Successfully Added", data: newBook, error: null})

        } catch(err) {
            res.status(500).json({error: true, message: err.message || "Can't add a book right now"})
        }
    }

    static async editABook(req, res) {
        try{
            console.log(req.body);
            let id = req.params.id
            let title = req.body.title
            let author = req.body.author
            let description = req.body.description
            let category = req.body.category

            let newBook = await bookServices.editABook(id, title, author, description, category)

            res.status(201).json({status: "Successfully Updated", data: newBook, error: null})

        } catch(err) {
            res.status(500).json({error: true, message: err.message || "Can't Edit a book right now"})
        }
    }

    static async deleteABook(req, res) {
        try{
            let id = req.params.id

            let deletedBook = await bookServices.deleteABook(id)

            res.json({status: "Successfully Deleted", data: deletedBook, error: null})

        } catch(err) {
            res.status(500).json({error: true, message: err.message || "Can't Delete a book right now"})
        }
    }
}