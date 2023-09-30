require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./router/router')
const sequelize = require('./utils/database')
const User = require('./models/userModel')
const Message = require('./models/messageModel')
const Group = require('./models/groupModel')
const GroupUserInfo = require('./models/groupUserInfo')



const app = express()
app.use(cors())
app.use(express.json())
app.use(router)


User.hasMany(Message)
Message.belongsTo(User, { foreignKey: 'userId' })



User.belongsToMany(Group, {
  through: GroupUserInfo, // Specify the custom join table
  foreignKey: 'userId', // Foreign key in the join table that links to User
});

Group.belongsToMany(User, {
  through: GroupUserInfo, // Specify the custom join table
  foreignKey: 'groupId', // Foreign key in the join table that links to Group
});

Group.hasMany(Message); // One-to-Many
Message.belongsTo(Group); // One-to-Many

let appServer = app.listen(process.env.PORT, () => {
  console.log('server started...')
});


const io = require('socket.io')(appServer, {
  pingTimeout: 60000,
  cors: {
    origin: 'http://localhost:3000'
  }
})

io.on('connection', (socket) => {


  socket.on('send-message', (messageObj, groupId) => {

    socket.join(groupId)

    io.to(groupId).emit('receive-message', messageObj, groupId)
  })
})
