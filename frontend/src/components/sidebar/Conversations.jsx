import React from 'react'
import { useEffect, useRef } from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'
import useGetMessages from '../../hooks/useGetMessages'
import useListenMessages from '../../hooks/useListenMessages.js'


const Conversations = () => {
  const {loading, conversations} = useGetConversations()
  

  console.log("conversations: ", conversations)
  return (
    <div className='py-2 flex flex-col overflow-auto no-scrollbar'>
        {conversations.map((conversation) => (
            <Conversation
            key={conversation._id}
            conversation={conversation}
            status="placeholderstatus"//add get status functionality
            />
        ))}
        {loading ? <span className="loading loading-infinity loading-lg"></span> : null}
        
    </div>
  )
}

export default Conversations