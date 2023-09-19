const SequelizePackage = require('sequelize')
const sequelize = require('../utils/database')
const User = require('./userModel')

const Message = sequelize.define('message',{
    id:{
        type:SequelizePackage.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:SequelizePackage.STRING,
    },
    message:{
        type:SequelizePackage.STRING,
    },
    groupId:{
        type:SequelizePackage.STRING,
        allowNull:false,
    }
})


module.exports = Message;