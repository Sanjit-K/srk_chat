import React from 'react'
import useConversation from '../../store/useConversation.js'

const Conversation = ({conversation, status}) => {
    const {selectedConversation, setSelectedConversation} = useConversation()
    const isSelected = selectedConversation?._id === conversation._id
  return (<>
        <div className={`flex gap-2 items-center hover:bg-slate-800 rounded p-2 py-2 cursor-pointer border mb-3 w-[300px] ${isSelected ? 'bg-slate-800' : ''}`} onClick={() => setSelectedConversation(conversation)}>

            <div className='avatar online'>
                <div className='w-12 rounded-full'>
                    
                    <img src={conversation.profilePic} />
                </div>
            </div>
            <div className='flex flex-col flex-1 text-left'>

                <div className='text-lg font-bold ml-2'>
                    <p>{conversation.username}</p>
                    <span className='font-sm font-light'>{status}</span>
                </div>
                
            </div>
        </div>
        

    </>
    )
  
}

export default Conversation