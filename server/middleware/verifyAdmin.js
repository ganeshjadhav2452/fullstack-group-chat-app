const GroupUserInfo = require('../models/groupUserInfo')

const verifyAdmin = async(req,res,next)=>{
    const adminUserId = Number(req.query.adminUserId);
    const groupId = req.query.groupId;
    try {
        const groupInfo = await GroupUserInfo.findOne({
            where: {
              userId: adminUserId,
              groupId:groupId,
            },
          });
          const isAdmin = groupInfo ? groupInfo.isAdmin : false;

          if(isAdmin){
            console.log('admin verification completed')
            next()
          }else{
            res.status(404).json({message:"sorry only admin can perform this action"})
          }
    } catch (error) {
      console.log(error)
        res.status(500).json({message:"sorry something went wrong while verifying admin"})
    }
}

module.exports = verifyAdmin;