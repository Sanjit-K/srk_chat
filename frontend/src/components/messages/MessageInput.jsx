import React from 'react'

const MessageInput = () => {

    const ToUsername = "JohnDoe"
  return (
    <input
    type="text"
    placeholder={`Message ${ToUsername}`}
    className="input input-bordered input-success w-[96%] ml-4 mt-4"
    />

  )
}

export default MessageInput