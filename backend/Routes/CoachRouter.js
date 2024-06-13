const express = require('express')
const Router = express.Router()


// CONTROLLERS
const CoachLaunchViewController = require('../Controllers/CoachControllers/CoachLaunchViewController')
const CreateNewPlayerTokenController = require('../Controllers/CreateUserControllers/CreateNewPlayerTokenController')

// MIDDLEWARE
const authenticateToken = require('../Middleware/authenticateToken')
const authenticateCoach = require('../Middleware/authenticateCoach')

// ROUTES


Router.get('/', authenticateToken, authenticateCoach, CoachLaunchViewController)
Router.get('/getCreatePlayerToken', authenticateToken, authenticateCoach, CreateNewPlayerTokenController)


module.exports = Router