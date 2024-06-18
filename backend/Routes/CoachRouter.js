const express = require('express')
const Router = express.Router()


// CONTROLLERS
const CoachLaunchViewController = require('../Controllers/CoachControllers/CoachLaunchViewController')
const CreateNewPlayerTokenController = require('../Controllers/CreateUserControllers/CreateNewPlayerTokenController')
const UserListController = require('../Controllers/CoachControllers/UserListController.js')
const checkNewPlayerTokenController = require('../Controllers/CreateUserControllers/CheckNewPlayerTokenController.js')
const CheckIfUserExistsController = require('../Controllers/CreateUserControllers/CheckIfUserExistsController.js')
const CreateNewPlayerController = require('../Controllers/CreateUserControllers/CreateNewPlayerController.js')

// MIDDLEWARE
const authenticateToken = require('../Middleware/authenticateToken')
const authenticateCoach = require('../Middleware/authenticateCoach')

// ROUTES


Router.get('/', authenticateToken, authenticateCoach, CoachLaunchViewController)
Router.get('/getCreatePlayerToken', authenticateToken, authenticateCoach, CreateNewPlayerTokenController)
Router.post('/check', checkNewPlayerTokenController)
Router.get('/list',authenticateToken,authenticateCoach, UserListController)
Router.post('/checkUser', CheckIfUserExistsController)
Router.post('/create/:token', CreateNewPlayerController)


module.exports = Router