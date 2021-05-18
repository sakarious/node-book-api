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
}