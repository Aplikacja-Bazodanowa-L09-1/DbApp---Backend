const crypto = require('crypto')
const {Create_user_token} = require('../../Models/models')

const CreateNewPlayerTokenController = async (req,res) => {

    const createAccountToken = crypto.randomBytes(32).toString('hex')

    const now = new Date()
    const date = {
        year: now.getFullYear(),
        month: now.getMonth(),
        day: now.getDate(),
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds()
    }

    const tokenExpireDate = new Date(date.year, date.month, date.day + 3,  // 3 dni ważności
        date.hour, date.minute, date.second)

    const tEDF = { // tEDF = tokenExpireDateFields
        year: tokenExpireDate.getFullYear(),
        month: tokenExpireDate.getMonth() + 1,
        day: tokenExpireDate.getDate(),
        hour: tokenExpireDate.getHours(),
        minute: tokenExpireDate.getMinutes(),
        second: tokenExpireDate.getSeconds()
    }

    const tokenExpireDateString = `${tEDF.year}-${tEDF.month}-${tEDF.day} ${tEDF.hour}:${tEDF.minute}:${tEDF.second}`

    try {
        
        const query = await Create_user_token.create({expire_date:tokenExpireDate, role:'Player', token:createAccountToken})
        .then(token => {
            res.json({'createPlayerToken':createAccountToken})
        })

    } catch (error) {
        res.status(400).json({'detail':error})
    }
}



module.exports = CreateNewPlayerTokenController