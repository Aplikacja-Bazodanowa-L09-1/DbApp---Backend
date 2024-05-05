require('dotenv').config()
//const util = require('util')
const cors = require('cors')
const express = require('express')
const app = express()


// DATABASE
const {ConnectDB} = require('./Database/ConnectDB')

// ROUTERS
const LoginRouter = require('./Routes/AuthRouter')
const AppRouter = require('./Routes/AppRouter')


// MIDDLEWARE
app.use(express.json())
app.use(cors({origin: "http://localhost:3000"}))

// PATHS
app.use('/auth', LoginRouter)
app.use('/app', AppRouter)



const PORT = process.env.SERVER_PORT | 3000
ConnectDB().then(
    app.listen(PORT, () => {console.log(`Server is listening on port ${PORT} ...`)})
)





