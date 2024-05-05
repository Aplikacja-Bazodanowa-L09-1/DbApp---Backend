const express = require('express')
const Router = express.Router()


// CONTROLLERS
const MainViewController = require('../Controllers/AppControllers/MainViewController')

// MIDDLEWARE
const authenticateToken = require('../Middleware/authenticateToken')

Router.get('/', authenticateToken, MainViewController)




module.exports = Router