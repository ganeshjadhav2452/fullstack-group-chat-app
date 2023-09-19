const SequelizePackage = require('sequelize')
const sequelize = require('../utils/database')

const  User = sequelize.define('user',{
    id:{
        type:SequelizePackage.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name:{
        type:SequelizePackage.STRING,
        allowNull:false
    },
    email:{
        type:SequelizePackage.STRING,
        allowNull:false
    },
    password:{
        type:SequelizePackage.STRING,
        allowNull:false,

    },
    
})

module.exports = User;