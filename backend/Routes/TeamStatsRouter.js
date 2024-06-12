const express = require('express')
const Router = express.Router()


// CONTROLLERS
const TeamStatsViewController = require('../Controllers/TeamStatsControllers/TeamStatsViewController')
const TeamStatisticsController = require('../Controllers/TeamStatsControllers/TeamStatisticsController')
const TeamInfoController = require('../Controllers/TeamStatsControllers/TeamInfoController')
const QuestionaryController = require('../Controllers/TeamStatsControllers/QuestionaryController')

// MIDDLEWARE
const authenticateToken = require('../Middleware/authenticateToken')

// ROUTES
Router.get('/', authenticateToken, TeamStatsViewController)
Router.get('/statistics', authenticateToken, TeamStatisticsController)
Router.get('/info', authenticateToken, TeamInfoController)
Router.get('/questionary', authenticateToken, QuestionaryController)



module.exports = Router