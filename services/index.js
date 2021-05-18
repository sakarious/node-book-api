const bookDB = require('../model')
module.exports = class bookServices {
    static async getAllBooks () {
        try{
            let allBooks = await bookDB.find()
            return allBooks
        } catch(err){
            console.log(err.message);
        }
    }

    static async getABook (id) {
        try{
            let book = await bookDB.findById(id)
            return book
        } catch(err){
            console.log(err.message);
        }
    }

    static async addABook (title, author, description, category, imageURL, tags){
        try{
            let newBook = new bookDB({
                title,
                author,
                description,
                category,
                imageURL,
                tags
            })

            let savedBook = newBook.save()
            return savedBook

        } catch(err) {
            console.log(err.message);
        }
    }

    static async editABook (id, title, author, description, category, imageURL, tags){
        try{
            let updatedBook = bookDB.findByIdAndUpdate(id, {
                $set: { title, author, description, category}
            }, {new: true})
            return updatedBook

        } catch(err) {
            console.log(err.message);
        }
    }
}