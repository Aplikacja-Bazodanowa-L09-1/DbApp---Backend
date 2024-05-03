const {client} = require('../Database/ConnectDB')
const jwt = require('jsonwebtoken')

// MODELS
const {User, Refresh_token} = require('../Models/models')

const Login = async (req,res) => {

    try{
        console.log(req.body.username)
        const searched_user = await User.findAll({ 
            where: {
                username: `${req.body.user}`,
                password: `${req.body.password}`
            }
        })

        if(searched_user){
            
            const user = {name:req.body.username}
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' })
            const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)

            try {
                await Refresh_token.create({
                    token: `${refreshToken}`
                })
                // await client.query(`INSERT INTO refresh_tokens(token) VALUES('${refreshToken}')`)
                res.json({"access":accessToken, "refresh":refreshToken})

            } catch (error) {
                res.json({"detail":error})
            }

            

        }else{
            throw new Error("no user with that credentials found")
        }
        
    } catch (error) {
        console.log(error)
        res.status(401).send({"detail":`${error}`})
    }
}


module.exports = Login