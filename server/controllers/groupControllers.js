const { v4: uuidv4 } = require("uuid");
const Group = require("../models/groupModel");
const User = require("../models/userModel");
const GroupUserInfo = require("../models/groupUserInfo");

module.exports = groupControllers = {
  createGroup: async (req, res) => {
    const userId = req.user.id;
    try {
      const response = await req.user.createGroup({
        id: uuidv4(),
        groupName: req.body.groupName,
        admin: userId,
      });

      const groupInfo = await GroupUserInfo.findOne({
        where: {
          userId: userId,
          groupId: response.id,
        },
      });

      groupInfo.isAdmin = true;
      groupInfo.save();

      res
        .status(200)
        .json({ message: "group created successfully", response: response });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "sorry group cannot be created" });
    }
  },
  fetchGroup: async (req, res) => {
    try {
      const response = await req.user.getGroups();

      res.status(200).json({ data: response });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "sorry groups cannot be fetched" });
    }
  },
  addUser: async (req, res) => {
    const userId = Number(req.body.userId);
    const groupId = req.body.groupId;

    try {
      const user = await User.findByPk(userId);
      if (!user) {
        throw new Error("User not found");
      }

      const group = await Group.findByPk(groupId);

      if (!group) {
        throw new Error("Group not found");
      }
      await user.addGroup(group);

      res.status(200).json({ message: "user Added successfully" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "sorry user cannot be added in this group" });
    }
  },
  fetchUsersOfGroup: async (req, res) => {
    const groupId = req.query.groupId;

    try {
      const avilableGroup = await Group.findByPk(groupId);

      const users = await avilableGroup.getUsers({
        attributes: ["id", "name", "email"],
      });

      res.status(200).json({ data: users });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "sorry user cannot be fetched" });
    }
  },
  setAdminForGroup: async (req, res) => {
    const userId = Number(req.query.userId);
    const groupId = req.query.groupId;
    try {
      const groupInfo = await GroupUserInfo.findOne({
        where: {
          userId: userId,
          groupId: groupId,
        },
      });
      if (groupInfo) {
        groupInfo.isAdmin = true;
        await groupInfo.save();
        res
          .status(200)
          .json({ message: "user promoted as admin successfully" });
      } else {
        res
          .status(404)
          .json({ message: "sorry this user is not exists in group" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "sorry cant set admin for now" });
    }
  },
  removeUserFromGroup: async (req, res) => {
    const userId = req.query.userId;
    const groupId = req.query.groupId;
    try {
      const user = await User.findByPk(userId);
      const group = await Group.findByPk(groupId);

      await user.removeGroup(group);

      res.status(200).json({ message: "user removed fom group" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "sorry user cannot be deleted from group" });
    }
  },
};
