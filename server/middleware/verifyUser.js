const jwt = require('jsonwebtoken');
require('dotenv').config()
const User = require('../models/userModel')


const verifyUser = async(req, res, next) => {
  let token = req.headers['authorization'];
    console.log('this is token brooo>>>>>>',token)
  try {
    // Verify the token using HS256 algorithm and the shared secret key
   
    let verified = jwt.verify(token,process.env.JWT_SECRETE_KEY);
   
  await User.findByPk(verified.id).then(user => {
console.log('this is user bro>>>',user)
    req.user = user; 
    next();
})
    
  
  } catch (error) {
  console.log(error)
    res.status(401).send('user authentication failed');
  }
};

module.exports = verifyUser;
