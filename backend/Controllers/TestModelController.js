const {User} = require('../Models/models')

const TestModelController = async (req, res) => {
    try {
        const user = await User.findAll({
            attributes: ['username'],
            where: {
                username: 'Dante01'
            }
        })
        if(user){
            res.json({user: user})
        }
        
    } catch (error) {
        console.log(error)
    }
}


module.exports = TestModelController