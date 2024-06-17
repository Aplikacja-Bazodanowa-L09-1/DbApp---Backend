const express = require('express')
const Router = express.Router()


// CONTROLLERS
const CoachLaunchViewController = require('../Controllers/CoachControllers/CoachLaunchViewController')
const CreateNewPlayerTokenController = require('../Controllers/CreateUserControllers/CreateNewPlayerTokenController')
const UserListController = require('../Controllers/CoachControllers/UserListController.js')
const UserIdViewDataController = require('../Controllers/CoachControllers/UserViewDataController.js') 
const IdViewStatisticController = require('../Controllers/CoachControllers/UserViewStatisticController.js')

// MIDDLEWARE
const authenticateToken = require('../Middleware/authenticateToken')
const authenticateCoach = require('../Middleware/authenticateCoach')

// ROUTES


Router.get('/', authenticateToken, authenticateCoach, CoachLaunchViewController)
Router.get('/getCreatePlayerToken', authenticateToken, authenticateCoach, CreateNewPlayerTokenController)
Router.get('/list',authenticateToken,authenticateCoach,UserListController)
Router.get('/statistic',authenticateToken,authenticateCoach,IdViewStatisticController)
Router.get('/data',authenticateToken,authenticateCoach,UserIdViewDataController)


module.exports = Router