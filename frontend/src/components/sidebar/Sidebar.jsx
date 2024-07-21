import React from 'react'
import SearchInput from './SearchInput.jsx'
import Conversations from './Conversations.jsx'
import LogoutButton from './LogoutButton.jsx'
const Sidebar = () => {
  return (
    <div className='flex flex-col items-center justify-between bg-black p-6 rounded-lg bg-opacity-34'>
        <SearchInput/>
        <div className='divider px-3'></div>
        <Conversations/>
        
        <LogoutButton/>
    </div>
  )
}

export default Sidebar