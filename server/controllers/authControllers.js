const User = require("../models/userModel");
const Bcrypt = require("bcryptjs");
const sequelize = require("../utils/database");
require('dotenv').config()
const Jwt = require('jsonwebtoken')

const authControllers = {
  signup: async (req, res) => {
    const userExists = await User.findAll({
      where: { email: req.body.userDetails.email },
    });

    if (userExists.length === 0) {
      const bcryptedPassword = await Bcrypt.hash(
        req.body.userDetails.password,
        10
      );
      try {
        const result = await User.create({
          name: req.body.userDetails.name,
          email: req.body.userDetails.email,
          password: bcryptedPassword,
        });

        res.status(200).json(result);
      } catch (error) {
        console.log(error);
        res.status(400).json({ message: "sorry something went wrong" });
      }
    } else {
      res
        .status(409)
        .json({ message: "sorry this user is already registered !" });
    }
  },

  signin: async (req, res) => {
    const email = req.body.userDetails.email;

    const isUserEmailExists = await User.findAll({ where: { email: email } });
  
    const password = await Bcrypt.compare(
      req.body.userDetails.password,
      isUserEmailExists[0].password
    );

    if (isUserEmailExists.length === 0) {

      return res.status(404).send("User Not Found !");

    } else if (password && isUserEmailExists[0].email == email) {
      return Jwt.sign(
        { id: isUserEmailExists[0].id },
        process.env.JWT_SECRETE_KEY,

        (err, token) => {
          if(err){
          return res.status(500).json({message:'sorry something went wrong'})
          }
          res.status(200).json({
            token: token
          });
        }
      );
    } else {
      return res
        .status(401)
        .json({message:"sorry the password you've entered is wrong !"});
    }
  },
};

module.exports = authControllers;
