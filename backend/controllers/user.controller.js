import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) =>{
    try {
        const loggedInUser = req.user._id

        const filteredUsers = await User.find({_id:{$ne:loggedInUser}}).select("-password") //find all users except logged in user

        res.status(200).json(filteredUsers)
    } catch (error) {
        console.log("Error in getUsersForSidebar controller", error.message)
        res.status(500).json({error:"internal server error"})
    }
}


export const setStatus = async (req, res) =>{
    try {
        const {status, userToSet} = req.body
        const updatedUser = await User.findByIdAndUpdate(userToSet, {status}, {new:true})
        res.status(200).json(updatedUser)
    } catch (error) {
        console.log("Error in setStatus controller", error.message)
        res.status(500).json({error:"internal server error"})
    }
}