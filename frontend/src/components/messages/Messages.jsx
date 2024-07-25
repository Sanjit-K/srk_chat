import React, { useEffect, useRef } from 'react'
import Message from './Message.jsx'
import useGetMessages from '../../hooks/useGetMessages'
import useListenMessages from '../../hooks/useListenMessages.js'
const Messages = () => {
  const {messages, loading} = useGetMessages()
  useListenMessages()
  const lastMessageRef = useRef()
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth"})
    }, 100)
    
  }, [messages])
  console.log(messages)
  return (
    <div className='px-4 flex-1 overflow-auto'>
        {!loading && messages.length > 0 && messages.map((message) => (
            <div key={message._id} ref={lastMessageRef}>
            <Message message={message}/>
            </div>
            
        ))}
        {loading ? <span className="loading loading-infinity loading-lg mt-40 size-20"></span> : null}
        {!loading && messages.length === 0 && (
          <p className='mt-[50%] text-center text-gray-300 text-2xl'>Send a message to start the conversation!</p>
        )}
    </div>
  )
}

export default Messages