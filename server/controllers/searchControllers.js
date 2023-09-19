const User = require('../models/userModel')


module.exports = searchControllers = {
    searchProfiles: async (req, res) => {
        const searchedText = req.query.searchedText
        try {
            const response = await User.findAll({
                where: {
                    name: searchedText
                },
                attributes: ['id', 'name', 'email']
            });

            res.status(200).json({ data: response })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'cannot find users' })

        }
    }, 
   

}