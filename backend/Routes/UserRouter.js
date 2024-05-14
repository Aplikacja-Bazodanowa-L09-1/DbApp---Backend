const express = require('express')
const Router = express.Router()


// CONTROLLERS
const UserStatsViewController = require('../Controllers/UserControllers/UserStatsViewController')
const UserInfoController = require('../Controllers/UserControllers/UserInfoController')

// MIDDLEWARE
const authenticateToken = require('../Middleware/authenticateToken')

Router.get('/', authenticateToken, UserStatsViewController)
Router.get('/info', authenticateToken, UserInfoController)




module.exports = Router