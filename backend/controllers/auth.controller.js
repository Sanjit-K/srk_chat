import tokenAndCookieGenerator from "../utils/generateToken.js";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res) =>{
    try {
        const {username, password, confirmPassword} = req.body;
        //HANDLE ERRORS
        if(password !== confirmPassword){
            return res.status(400).json({error: "Passwords do not match"})
        }
        const usernameExists = await User.findOne({username})
        if(usernameExists){
            return res.status(400).json({error: "Username already exists"})
        }
        if(username.includes(' ')){
            return res.status(400).json({error: "Username can not contain spaces"})
        }
        //HASH PASSWORDS
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)
        //PFP SETUP
        const pfp = `https://avatar.iran.liara.run/username?username=${username}+`
        //REGISTER USER
        const newUser = new User({
            username,
            password: hashedPassword,
            profilePic: pfp
        })
        if(newUser){
            //GENERATE JWT TOKEN
            tokenAndCookieGenerator(newUser._id, res)
            await newUser.save()
            res.status(201).json({
                _id: newUser._id,
                username:newUser.username,
                profilePic: newUser.profilePic
            })
        }else{
            res.status(400).json({error:"invalid user data"})
        }
    } catch (error) {
        console.log("Error in signup controller", error.message)
        res.status(500).json({error:"internal server error"})
    }
}
export const login = async (req, res) =>{
    try {
        const {username, password} = req.body
        const user = await User.findOne({username})
        const isPasswordCorrect = await bcryptjs.compare(password, user?.password || "");
        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:"Invalid username or password"});
        }
        tokenAndCookieGenerator(user._id, res)
        res.status(200).json({
            _id:user._id,
            username:user.username,
            profilePic:user.profilePic,
        })
    } catch (error) {
        console.log("Error in login controller", error.message)
        res.status(500).json({error:"internal server error"})
    }
}
export const logout = (req, res) =>{
    try {
        res.cookie("jwt", "", {
            maxAge: 0
        })
        res.status(200).json({
            message: "logged out successfully"
        })
    } catch (error) {
        console.log("Error in logout controller", error.message)
        res.status(500).json({error:"internal server error"})
    }
}
