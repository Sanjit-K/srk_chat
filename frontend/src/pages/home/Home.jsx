import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const home = () => {
  return (
    <div className=' flex w-full h-full rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border p-5'>
            <Sidebar/>
            <MessageContainer/>
    </div>
  )
}

export default home