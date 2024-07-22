import React from 'react'
import { useState } from 'react'
import useSendMessage from '../../hooks/useSendMessage'
import toast from 'react-hot-toast'
const MessageInput = (ChatSelected) => {
  const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!message) return
    await sendMessage(message)
    setMessage("")
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event)
    }
  }
  const ToUsername=ChatSelected.ChatSelected.username
  return (
    <input
    type="text"
    placeholder={`Message ${ToUsername}`}
    className="input input-bordered input-success w-[96%] ml-4 mt-4"
    onKeyUp={handleKeyDown}
    value = {message}
    onChange={(e) => setMessage(e.target.value)}
    />

  )
}

export default MessageInput