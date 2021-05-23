// USERS SERVICES
const userModel = require('../model/users')
const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = class userServices {
    static async Register (firstname, lastname, username, passwd) {
        let password = await bcrypt.hash(passwd, saltRounds)

        let newUser = new userModel({
            firstname,
            lastname,
            username,
            password
        })

        return newUser.save()
    }

    static async Login () {
        return 'Login Services'
    }
}