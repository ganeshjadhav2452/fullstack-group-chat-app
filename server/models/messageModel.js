const SequelizePackage = require('sequelize')
const sequelize = require('../utils/database')
const User = require('./userModel')

const Message = sequelize.define('message',{
    name:{
        type:SequelizePackage.STRING,
    },
    message:{
        type:SequelizePackage.STRING,
    }
})


module.exports = Message;