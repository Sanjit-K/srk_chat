import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../store/useConversation'
const Message = ({message}) => {
    const {authUser} = useAuthContext()
    const {selectedConversation} = useConversation()
    const fromMe = message.senderId === authUser._id
    const chatClassName = fromMe ? "chat-end" : "chat-start"
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic
    const bubblebgcolor = fromMe ? "bg-blue-600" : "bg-gray-700"
    console.log(message)
  return (
    <>
        <div className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src={profilePic} />
                </div>
            </div>
            <div className="chat-header">
                {authUser.username}
                <span>&nbsp;</span>
                
                <time className="text-xs opacity-50 ">{message.createdAt}</time>
            </div>
            
            <div className={`chat-bubble ${bubblebgcolor} text-white`}>{message.message}</div>
            
            <div className="chat-footer opacity-50">Delivered</div> 
        </div>

    </>
    

    
  )
}

export default Message