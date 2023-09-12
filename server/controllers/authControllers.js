const User = require("../models/userModel");
const Bcrypt = require("bcryptjs");
const sequelize = require("../utils/database");

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
    try {
      console.log(req.body);
      res.status(200).send("hi i got details");
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = authControllers;
