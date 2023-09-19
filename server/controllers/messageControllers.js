const Message = require('../models/messageModel')
const { Op } = require("sequelize");

module.exports = messageControllers={
    sendMessage:async(req,res)=>{
      console.log('thi is >>>',req.user)
        try {
            const response = await req.user.createMessage({
                name:req.user.name,
                message:req.body.message,
               
                groupId:req.body.groupId
            })

            res.status(200).json({message:'message sent successfuly'})
        } catch (error) {
            console.log(error)
            res.status(500).json({message:'sorry your message can not be sent'})            
        }
    },
    receiveMessages:async(req,res)=>{
        const lastId = req.params.lastid ? Number(req.params.lastid):0
        const groupId = req.query.groupId
       
        try {
            const response = await Message.findAll({
                where: {
                  id: {
                    [Op.gt]: lastId,
                  },
                  groupId:groupId,
                },
              });
              
              console.log(response)
            res.status(200).json(response)
        } catch (error) {
            console.log(error)
            res.status(500).json({message:'sorry message cannot be fetched'})
            
        }
    },
}