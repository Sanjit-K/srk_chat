import React, { useEffect } from 'react'
import Messages from './Messages.jsx'
import MessageInput from './MessageInput.jsx'
import useConversation from '../../store/useConversation.js'
const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation()
  useEffect(() => {
    return () => {setSelectedConversation(null)}
  }, [])
  const ChatSelected = selectedConversation


  return (
    <div className='right-0 w-full md:min-w-[450px] flex flex-col h-full'>
        {!ChatSelected ? (<NoChatSelected/>) :(
            <>
            {/* Header */}

            <div className='bg-gray-700 px-1 py-2 mb-2 rounded-lg ml-3'>
                <span className='label-text'>To:</span> <span className='text-gray-300 text-bold'>{selectedConversation.username}</span>
            </div>
            <Messages/>

            <MessageInput ChatSelected={ChatSelected}/>
        </>
        )}
        
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋</p>
				<p>Select a chat to start messaging</p>
				
			</div>
		</div>
	);
};