const {User, Players, Teams} = require('../../Models/models')

const NotificationController = async (req, res) => {
    try {
        const notifi_data = await User.findOne({
            //attributes: ['first_name', 'last_name', 'role'],
            include: [
                {
                    model: Players,
                    include: [{
                        model: Teams,
                        attributes: ['team_message_title', 'team_message']
                    }]
                }
            ],
            where: {
                username: req.user.name
            }
        })

        if(notifi_data.length != 0){
            return res.json({notification:notifi_data})
        }

        
    } catch (error) {
        return res.json({'detail':error})
    }
}



module.exports = NotificationController