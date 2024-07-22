import React from 'react'
import Message from './Message.jsx'
import useGetMessages from '../../hooks/useGetMessages'
const Messages = () => {
  const {messages, loading} = useGetMessages()
  console.log(messages)
  return (
    <div className='px-4 flex-1 overflow-auto'>
        {!loading && messages.length > 0 && messages.map((message) => (
            <Message
            key={message._id}
            message={message}
            />
        ))}
        {loading ? <span className="loading loading-infinity loading-lg mt-40 size-20"></span> : null}
        {!loading && messages.length === 0 && (
          <p className='mt-[50%] text-center text-gray-300 text-2xl'>Send a message to start the conversation!</p>
        )}
    </div>
  )
}

export default Messages