const express = require('express')
const Router = express.Router()


// CONTROLLERS
const TeamStatsViewController = require('../Controllers/TeamStatsControllers/TeamStatsViewController')
const TeamStatisticsController = require('../Controllers/TeamStatsControllers/TeamStatisticsController')
const TeamInfoController = require('../Controllers/TeamStatsControllers/TeamInfoController')

const TeamFormViewController = require('../Controllers/TeamStatsControllers/TeamFormViewController')

// MIDDLEWARE
const authenticateToken = require('../Middleware/authenticateToken')
//const TeamFormViewController = require('../Controllers/TeamStatsControllers/TeamFormViewController')

Router.get('/', authenticateToken, TeamStatsViewController)
Router.get('/statistics', authenticateToken, TeamStatisticsController)
Router.get('/info', authenticateToken, TeamInfoController)

Router.get('/form', authenticateToken, TeamFormViewController)




module.exports = Router