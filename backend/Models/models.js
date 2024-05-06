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
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
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
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        resetpasswordtoken: {
            type: DataTypes.STRING,
            allowNull: true
        },
        resetpasswordtokenexpirdate: {
            type: DataTypes.TIME,
            allowNull: true
        },
        emailverifytoken: {
            type: DataTypes.STRING,
            allowNull: true
        },
        emailverifytokenexpirdate: {
            type: DataTypes.TIME,
            allowNull: true
        },
    },
    {
        sequelize,
        modelName: 'users'
    }
)

class Refresh_token extends Model {}
Refresh_token.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        tokens: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        modelName: 'refresh_tokens'
    }
)

class Blacklist_refresh_token extends Model {}
Blacklist_refresh_token.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        token: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        modelName: 'blacklist_refresh_tokens'
    }
)


module.exports = {User, Refresh_token, Blacklist_refresh_token}

