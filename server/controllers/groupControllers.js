const {v4:uuidv4} = require('uuid')
const Group = require('../models/groupModel')
const User = require('../models/userModel')

module.exports = groupControllers ={
    createGroup:async(req,res)=>{

        try {
            const response = await req.user.createGroup({
                id:uuidv4(),
                groupName:req.body.groupName,
                admin:req.user.id
            })
            
            res.status(200).json({message:"group created successfully"})
        } catch (error) {
                console.log(error)
            res.status(500).json({message:'sorry group cannot be created'})            
        }
    },
    fetchGroup:async(req,res)=>{

        try {
            const response = await req.user.getGroups()

            res.status(200).json({data:response})
        } catch (error) {
            console.log(error)
            res.status(500).json({message:"sorry groups cannot be fetched"})
        }
    },
    addUser: async (req, res) => {
        const userId = Number(req.body.userId);
        const groupId = req.body.groupId
        console.log('this is group id ()()()()()()',groupId)
        try {
            const user = await User.findByPk(userId);
            if (!user) {
                throw new Error('User not found');
            }

            const group = await Group.findByPk(groupId);
            if (!group) {
                console.log('this is group brooooooo//////>>',group)
                throw new Error('Group not found');
            }

           
            await user.addGroup(group);

          
            res.status(200).json({ message: 'user Added successfully' })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'sorry user cannot be added in this group' })
        }
    }
  
}