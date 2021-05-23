//JWT
const jwt = require('jsonwebtoken')
// USERS CONTROLLER
const userServices = require('../services/users')

module.exports = class userController {
    static loginRequired(req, res, next){
        if (req.user){
            next()
        } else {
            res.status(400).json({message: "Authorization Failed. User not authenticated"})
            return
        }
    }

    static async Register (req, res) {
        console.log(req.body);
        let firstname = req.body.firstname
        let lastname = req.body.lastname
        let username = req.body.username
        let password = req.body.password

        let response = await userServices.Register(firstname, lastname, username, password)

        let regDetails = response
        let token = jwt.sign({
            firstname: regDetails.firstname,
            lastname: regDetails.lastname,
            username: regDetails.username
        }, 'SAKARIOUS', 
        { expiresIn: '1h' });

        res.json({message: 'Registration Successful', username: regDetails.username, token, error: null})
    }

    static async Login (req, res) {
        let username = req.body.username
        let password = req.body.password
        let response = await userServices.Login(username, password)
        
        
        if (!response){
            res.status(400).json({message: "Authorization Failed. User not found"})
            return
        }

        let loginDetails = response
        let token = jwt.sign({
            firstname: loginDetails.firstname,
            lastname: loginDetails.lastname,
            username: loginDetails.username
        }, 'SAKARIOUS', 
        { expiresIn: '1h' });

        res.json({message: 'Login Successful', username: loginDetails.username, token, error: null})
    }
}