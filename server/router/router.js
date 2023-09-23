const express = require('express')
const router = express.Router()
const authControllers = require('../controllers/authControllers')
const messageControllers = require('../controllers/messageControllers')
const groupControllers = require('../controllers/groupControllers')
const verifyUser = require('../middleware/verifyUser')
const searchControllers = require('../controllers/searchControllers')
const verifyAdmin = require('../middleware/verifyAdmin')
//auth routes
router.post('/signup',authControllers.signup)
router.post('/signin',authControllers.signin)



//messages routes

router.post('/send-message',verifyUser,messageControllers.sendMessage)
router.get('/receive-messages/:lastid',verifyUser,messageControllers.receiveMessages)

// group routes

router.post('/create-group',verifyUser,groupControllers.createGroup)
router.get('/fetch-groups',verifyUser,groupControllers.fetchGroup)
router.post('/add-user-to-group',verifyUser,groupControllers.addUser)
router.get('/fetch-users-of-group',verifyUser,groupControllers.fetchUsersOfGroup)
router.post('/make-user-admin',verifyUser,verifyAdmin,groupControllers.setAdminForGroup)
router.delete('/remove-user-from-group',verifyUser,verifyAdmin,groupControllers.removeUserFromGroup)
// search routes

router.get('/search-profiles',verifyUser,searchControllers.searchProfiles)

module.exports = router