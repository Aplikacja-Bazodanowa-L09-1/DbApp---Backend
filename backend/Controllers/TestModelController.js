const {User, Refresh_token, Event_players,Events,Player_answers,Players, Positions, Player_stats,Questionnares,Questions,Rented_equipments,Seasons,Teams,Team_stats} = require('../Models/models')

const TestModelController = async (req, res) => {
    try {
        const questions = await Questions.findAll({

            where: {
                id: 221
            }
        })
        if(questions){
            res.json({questions})
        }
        
    } catch (error) {
        console.log(error)
    }
}


module.exports = TestModelController