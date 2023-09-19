const express = require('express')
const cors = require('cors')
const router = require('./router/router')
const sequelize = require('./utils/database')
const User = require('./models/userModel')
const Message = require('./models/messageModel')
const Group = require('./models/groupModel')  
const app = express()
app.use(cors())
app.use(express.json())
app.use(router)


User.hasMany(Message)
Message.belongsTo(User , { foreignKey: 'userId' })

User.belongsToMany(Group ,{ through: 'group-user-info' });
Group.belongsToMany(User, { through: 'group-user-info' });

Group.hasMany(Message); // One-to-Many
Message.belongsTo(Group); // One-to-Many


sequelize.sync({force:false}).then(res => app.listen(5000, () => {
    console.log('server started...')
})).catch(err => console.log(err))