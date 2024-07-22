import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'

const Conversations = () => {
  const {loading, conversations} = useGetConversations()
  console.log(conversations)
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