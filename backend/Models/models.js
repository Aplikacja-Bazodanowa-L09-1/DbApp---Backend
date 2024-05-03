const {Sequelize, Model, DataTypes} = require('sequelize');
const {sequelize} = require('../Database/ConnectDB')

class User extends Model {}
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        },
        resetpasswordtoken: {
            type: DataTypes.STRING,
            allowNull: true
        },
        resetpasswordtokenexpiredate: {
            type: DataTypes.TIME,
            allowNull: true
        },
        emailverifytoken: {
            type: DataTypes.STRING,
            allowNull: true
        },
        emailverifytokenexpiredate: {
            type: DataTypes.TIME,
            allowNull: true
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'users'
    }
)

class Refresh_token extends Model {}
Refresh_token.init(
    {
        token: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        modelName: 'refresh_tokens'
    }
)


module.exports = {User, Refresh_token}

