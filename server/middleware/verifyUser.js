const jwt = require('jsonwebtoken');
require('dotenv').config()

const verifyUser = (req, res, next) => {
  let token = req.headers['authorization'];

  console.log('this is token broooo>>>',token)
  try {
    // Verify the token using HS256 algorithm and the shared secret key
   
    let verified = jwt.verify(token,process.env.JWT_SECRETE_KEY);
   req.user = verified

    
    next();
  } catch (error) {
  
    res.status(401).send('user authentication failed');
  }
};

module.exports = verifyUser;
