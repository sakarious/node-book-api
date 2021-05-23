// USERS CONTROLLER
const userServices = require('../services/users')

module.exports = class userController {
    static async Register (req, res) {
        console.log(req.body);
        let firstname = req.body.firstname
        let lastname = req.body.lastname
        let username = req.body.username
        let password = req.body.password

        let response = await userServices.Register(firstname, lastname, username, password)

        res.json({success: true, userDetails: response, error: null})
    }

    static async Login (req, res) {
        let response = await userServices.Login()
        res.send(response) 
    }
}