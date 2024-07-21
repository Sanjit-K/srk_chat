import React from 'react'

const Message = () => {
  return (
    <>
        <div className='chat chat-end'>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src="https://avatar.iran.liara.run/username?username=john+" />
                </div>
            </div>
            <div className="chat-header">
                Obi-Wan Kenobi
                <span>&nbsp;</span>
                <time className="text-xs opacity-50 ">12:45</time>
            </div>
            
            <div className="chat-bubble">hello</div>
            
            <div className="chat-footer opacity-50">Delivered</div> 
        </div>
        <div className='chat chat-start'>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src="https://avatar.iran.liara.run/username?username=john+" />
                </div>
            </div>
            <div className="chat-header">
                Obi-Wan Kenobi
                <span>&nbsp;</span>
                <time className="text-xs opacity-50 ">12:45</time>
            </div>
            
            <div className="chat-bubble">hello</div>
            
            <div className="chat-footer opacity-50">Delivered</div> 
        </div>

    </>
    

    
  )
}

export default Message