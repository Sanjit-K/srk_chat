import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    profilePic:{
        type:String,
        default:"",
    },status:{
        type:String,
        default:"I'm new here!"
    }
}, {timestamps:true})


const User = mongoose.model("User", userSchema)

export default User