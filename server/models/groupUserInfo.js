const {DataTypes} = require('sequelize')
const sequelize = require('../utils/database')

const GroupUserInfo = sequelize.define('group-user-info', {
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false, // Initially, no user is an admin
    },
  });

  
  module.exports = GroupUserInfo;