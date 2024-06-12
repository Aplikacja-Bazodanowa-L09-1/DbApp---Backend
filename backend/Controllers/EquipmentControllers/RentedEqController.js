const { Sequelize } = require('sequelize')
const {User, Players, Rented_equipments, Equipment} = require('../../Models/models')

const RentedEqController = async (req, res) => {
    try {
        
        const rented_equipment = await Rented_equipments.findAll({
              include: [{
                model: Players,
                attributes: ['id'],
                include: [{
                  model: User,
                  attributes: ['id'],
                  where: { username: req.user.name }
                }]
              }]
        }).then(async rent_equips => {

            if(rent_equips.length != 0){
                const equip_id_list = []

                for (let i = 0; i < rent_equips.length; i++) {
                    equip_id_list.push(rent_equips[i].equipment_id)
                }

                const equipment = await Equipment.findAll({
                    where:{
                        id: {
                            [Sequelize.Op.in]: equip_id_list
                        }
                    }
                })

                if(equipment.length !=0){
                    res.json({eq:equipment})
                }
                else{
                    res.status(400).json({'detail': 'Equipment find error'})
                }

            }
            else{
                return res.status(200).json({'detail':'No rented equipment'})
            }
            


        })

    } catch (error) {
        res.json({detail: error})
    }
}


module.exports = RentedEqController