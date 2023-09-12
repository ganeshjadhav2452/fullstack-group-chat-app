const Message = require('../models/messageModel')

module.exports = messageControllers={
    sendMessage:async(req,res)=>{
      
        try {
            const response = await Message.create({
                name:req.user.name,
                message:req.body.message,
                userId:req.user.id
            })

            res.status(200).json({message:'message sent successfuly'})
        } catch (error) {
            res.status(500).json({message:'sorry your message can not be sent'})            
        }
    },
    receiveMessages:async(req,res)=>{

        try {
            const response = await Message.findAll()
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({message:'sorry message cannot be fetched'})
            
        }
    },
}