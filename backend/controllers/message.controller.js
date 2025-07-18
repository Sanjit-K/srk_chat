import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js";
import { getRecieverSocketId, io } from "../socket/socket.js";


export const sendMessage = async (req,res) =>{
    try {
        const {message} = req.body
        const {id:receiverId} = req.params
        const senderId = req.user._id

        let conversation = await Conversation.findOne({
            participants:{
                $all:[
                    senderId,
                    receiverId
                ]
            }
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId, receiverId]
            })
        }

        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        })
        if(newMessage){
            conversation.messages.push(newMessage._id)
        }


        await Promise.all([conversation.save(), newMessage.save()])

        const recieverSocketId = getRecieverSocketId(receiverId)
        if(recieverSocketId){
            io.to(recieverSocketId).emit("newMessage", newMessage)
        }


        res.status(201).json(newMessage)


    } catch (error) {
        console.log("Error in sendMessage controller", error.message)
        res.status(500).json({error:"Internal server error"})
    }
}

export const getMessages = async (req, res) =>{
    try {
        const {id:userToChatId} = req.params
        const senderId = req.user._id
        const conversation = await Conversation.findOne({
            participants:{
                $all:[
                    senderId,
                    userToChatId
                ]
            }
        }).populate("messages") //returns messages in conversation as an array

        if(!conversation){
            return res.status(200).json([])
        }
        const messages = conversation.messages;

        res.status(200).json(conversation.messages)
        
    } catch (error) {
        console.log("Error in getMessage controller", error.message)
        res.status(500).json({error:"Internal server error"})
    }
}