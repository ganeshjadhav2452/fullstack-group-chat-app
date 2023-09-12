const express = require('express')
const router = express.Router()
const authControllers = require('../controllers/authControllers')
const messageControllers = require('../controllers/messageControllers')
const verifyUser = require('../middleware/verifyUser')

//auth routes
router.post('/signup',authControllers.signup)
router.post('/signin',authControllers.signin)



//messages routes

router.post('/send-message',verifyUser,messageControllers.sendMessage)
router.get('/receive-messages',verifyUser,messageControllers.receiveMessages)

module.exports = router