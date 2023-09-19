const SequelizePackage = require('sequelize')
const sequelize = require('../utils/database')


const Group = sequelize.define('group',{
    id:{
        type:SequelizePackage.STRING,
        allowNull:false,
        autoIncrement:false,
        primaryKey:true
    },
    groupName:{
        type:SequelizePackage.STRING,
        allowNull:false
    },
    admin:{
        type:SequelizePackage.BIGINT,
       
    },
   
})



module.exports = Group;