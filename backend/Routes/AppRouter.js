const express = require('express')
const Router = express.Router()


// CONTROLLERS
const MainViewController = require('../Controllers/AppControllers/MainViewController')
const UserProfileController = require('../Controllers/AppControllers/UserProfileController')
const NotificationController = require('../Controllers/AppControllers/NotificationController')
const TeamStatisticsController = require('../Controllers/TeamStatsControllers/TeamStatisticsController')
const CalendarEventController = require('../Controllers/AppControllers/CalendarEventController')


// MIDDLEWARE
const authenticateToken = require('../Middleware/authenticateToken')

Router.get('/', authenticateToken, MainViewController)
Router.get('/user/profile', authenticateToken, UserProfileController)
Router.get('/team/notification', authenticateToken, NotificationController)
Router.get('/calendar/event', authenticateToken, CalendarEventController)





module.exports = Router