//JWT
const jwt = require('jsonwebtoken')
const secretWord = 'SAKARIOUS'
// USERS CONTROLLER
const userServices = require('../services/users')

module.exports = class userController {
    static loginRequired(req, res, next){
        if (req.headers && req.headers.authorization){
            let splitedAuth = req.headers.authorization.split(' ')[0]
            let token = req.headers.authorization.split(' ')[1]
            if (splitedAuth !== 'Bearer'){
                res.status(400).json({message: "Authorization format is Bearer <token>"})
            } else {
                jwt.verify(token, secretWord, (err, decode) => {
                    if (err){
                        req.user = undefined
                        res.status(500).json({message: `Authorization Failed. ${err.message}` })
                        return
                    }

                    if(!decode){
                        req.user = undefined
                        res.status(401).json({message: `Invalid Authorization Token. Please try again.` })
                        return
                    } else {
                        req.user = decode
                        next()
                    }
                })


            }
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
        }, secretWord, 
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
        }, secretWord, 
        { expiresIn: '1h' });

        res.json({message: 'Login Successful', username: loginDetails.username, token, error: null})
    }
}