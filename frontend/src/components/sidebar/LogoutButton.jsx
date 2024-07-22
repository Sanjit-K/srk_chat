import React from 'react'
import useLogOut from '../../hooks/useLogOut.js'

const LogoutButton = () => {
  const {loading, logOut} = useLogOut()
  return (
    <div className='flex gap-2 items-center rounded-lg p-2 mt-auto bg-black bg-opacity-34' >
    
            <div className='avatar online'>
                <a className='w-12 rounded-full hover:blur-sm cursor-pointer'>
                    <img src="https://avatar.iran.liara.run/username?username=User+" />
                </a>
            </div>
            <div className='flex flex-col flex-1 text-left'>

                <div className='text-lg font-bold ml-2'>
                    <p>MyUsername</p>
                    <span className='font-sm font-light hover:text-gray-300 cursor-pointer '>MyStatus</span>
                </div>
            </div>
            <button className='btn btn-primary bg-red-400 border-white text-white hover:bg-red-600 hover:border-red-600 btn-sm ml-6' onClick={logOut}>Logout</button>
            
    </div>

  )
}

export default LogoutButton