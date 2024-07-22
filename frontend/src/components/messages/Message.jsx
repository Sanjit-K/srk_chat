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
    const d = new Date(message.createdAt)
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
                
            </div>
            
            <div className={`chat-bubble ${bubblebgcolor} text-white text-balance`}>{message.message}</div>
            
            <div className="chat-footer opacity-50">{`${d.getHours()}:${d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()}`} </div> 
        </div>

    </>
    

    
  )
}

export default Message